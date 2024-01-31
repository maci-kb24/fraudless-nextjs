import React from 'react'
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-px-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="mb-2 font-semibold">
                  Latest posts
                </h2>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Jan 31, 2024"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Jan 21, 2024"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Jan 31, 2024"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
  );
};

export default Blog;

