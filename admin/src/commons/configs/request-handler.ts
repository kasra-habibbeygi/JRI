/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { IGenericResponse } from '@/apis/v1/_shared/shared.dto';
import axios from 'axios';
import toast from 'react-hot-toast';

class RequestHandler extends EventTarget {
    accessTokenKeyName = 'accessToken';
    #baseUrl = '';
    #authorizationHeader = '';
    #axiosInstance = null;
    #isQueueProcessing = false;
    #queue = [];

    constructor() {
        super();
        this.#initiateAxiosInstance();
        this.#initiateAuthorizationHeader();
        this.addEventListener('handleRequestsQueue', this.#queueRequestsHandler, false);
    }

    #initiateAxiosInstance() {
        this.#baseUrl = import.meta.env.VITE_BASE_URL;
        this.#axiosInstance = axios.create({
            baseURL: this.#baseUrl
        });
    }

    clearHeader() {
        this.#authorizationHeader = '';
    }

    #initiateAuthorizationHeader() {
        if (typeof window !== 'undefined') {
            this.#authorizationHeader = localStorage.getItem(this.accessTokenKeyName)
                ? `Bearer ${JSON.parse(localStorage.getItem(this.accessTokenKeyName))}`
                : '';
        }
    }

    async #authorizationHandler() {
        if (localStorage.getItem(this.accessTokenKeyName)) {
            const accessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));
            const accessTokenMaxExpiredTimestamp = accessToken ? new 86400000() - 10000 : Date.now() - 10000;

            if (accessTokenMaxExpiredTimestamp <= Date.now()) {
                const { data } = await axios.put(`${this.#baseUrl}/auth/refresh-token`, { token: accessToken.token });
                localStorage.setItem(this.accessTokenKeyName, JSON.stringify(data.result.token));
            }

            const newAccessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));
            // if (new Date(newAccessToken.expiredAt).getTime() > Date.now()) {
            this.#authorizationHeader = `Bearer ${newAccessToken}`;
            // }
        }
    }

    async #queueRequestsHandler() {
        this.#isQueueProcessing = true;

        while (this.#queue.length > 0) {
            try {
                await this.#authorizationHandler();
            } catch (error) {
                localStorage.removeItem(this.accessTokenKeyName);
                localStorage.removeItem(this.refreshTokenKeyName);
                window.location.href = '/login';
            }

            const currentIndex = this.#queue.length - 1;
            const request = this.#queue[currentIndex];

            const result = this.#axiosInstance(request.url, {
                method: request.method,
                data: request.data,
                headers: {
                    Authorization: this.#authorizationHeader
                }
            });

            this.dispatchEvent(
                new CustomEvent(`request:${currentIndex}`, {
                    detail: result
                })
            );

            this.#queue.pop();
        }

        this.#isQueueProcessing = false;
    }

    async call<T>({ url, method, data = {} }) {
        type PromiseType = IGenericResponse<T>;

        return new Promise<PromiseType>((resolve, reject) => {
            const currentLength = this.#queue.push({ url, method, data });

            if (!this.#isQueueProcessing) {
                this.dispatchEvent(new CustomEvent('handleRequestsQueue'));
            }

            if (Object.keys(data).length > 0) {
                for (const key of Object.keys(data)) {
                    if (data[key] === '') {
                        delete data[key];
                    }
                }
            }

            this.addEventListener(
                `request:${currentLength - 1}`,
                async event => {
                    try {
                        const result = await event.detail;

                        if (result.data.message && result.status === 200) {
                            toast.success(result.data.message, { style: { zIndex: 2000 } });
                        }

                        resolve(result);
                    } catch (error) {
                        if (error.response?.status === 401) {
                            toast.error('شما باید مجدد احراز هویت بشوید !', { style: { zIndex: 2000 } });
                        }
                        if (error.response?.data.code === 3 || error.response?.data.code === 4 || error.response?.data.code === 100) {
                            localStorage.removeItem(this.accessTokenKeyName);
                            window.location.href = '/login';
                        } else {
                            toast.error(error.response?.data.message, { style: { zIndex: 2000 } });
                        }

                        reject(error);
                    }
                },
                {
                    once: true
                }
            );
        });
    }
}

export default new RequestHandler();
