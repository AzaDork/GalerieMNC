import React, { useEffect } from 'react';
import AtelierEncadrement from '../components/AtelierEncadrement';
import VideoSection from '../components/VideoSection';
import FramingWorkshop from '../components/FramingWorkshop';

const FramingPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Encadrement | Galerie MNC';
    }, []);

    return (
        <div className="pt-40">
            <AtelierEncadrement />
            <VideoSection />
            <FramingWorkshop />
        </div>
    );
};

export default FramingPage;
