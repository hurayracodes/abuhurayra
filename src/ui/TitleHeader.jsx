const TitleHeader = ({ title, subTitle }) => {
  return (
    <div className="m-4 sm:m-6 md:m-8 lg:m-12 leading-relaxed">
      <div>
        <h2 className="text-white text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">
          {title} 
           {subTitle && (
          <span className="text-cyan-300 text-center text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">
            {subTitle}
          </span>
        )}
        </h2>
       
      </div>
    </div>
  );
};

export default TitleHeader;