const ImageSection = ({imagePath}) => {
    return (
            <div className="grid w-full overflow-hidden bg-cover text-center"
                 style={{backgroundImage: `url(${imagePath})`}}>
                <div className="h-80"></div>
            </div>
    );
};
export default ImageSection;