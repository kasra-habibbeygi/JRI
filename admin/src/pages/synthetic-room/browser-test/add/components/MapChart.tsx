import { FC } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const highlightedProvinces = ['Tehran', 'Esfahan'];

const MapChart: FC = () => {
    const geoUrl = '/iran_geo1.json';

    return (
        <ComposableMap
            projection='geoMercator'
            projectionConfig={{
                scale: 1700,
                center: [53, 32]
            }}
            style={{
                width: '100%',
                height: 'auto'
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => {
                        const isHighlighted = highlightedProvinces.includes(geo.properties.NAME_1);

                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: isHighlighted ? '#FF5733' : '#D6D6DA',
                                        stroke: '#FFFFFF',
                                        strokeWidth: 0.75,
                                        outline: 'none'
                                    },
                                    hover: {
                                        fill: isHighlighted ? '#FF4500' : '#F53',
                                        stroke: '#FFFFFF',
                                        strokeWidth: 0.75,
                                        outline: 'none'
                                    },
                                    pressed: {
                                        fill: isHighlighted ? '#FF0000' : '#E42',
                                        stroke: '#FFFFFF',
                                        strokeWidth: 0.75,
                                        outline: 'none'
                                    }
                                }}
                            />
                        );
                    })
                }
            </Geographies>
        </ComposableMap>
    );
};

export default MapChart;
