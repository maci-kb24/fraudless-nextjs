const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <img src={image} alt="" className="w-full" />
            </div>
            <div>
              {date && (
                <p className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold">
                  {date}
                </p>
              )}
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold  hover:text-slate-600 sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {CardTitle}
                </a>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                {CardDescription}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default BlogCard;