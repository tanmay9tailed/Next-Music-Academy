"use client";

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";
import courseData from "../data/music_courses.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gradient-to-b from-black to-slate-900">
      <div>
        <div className="text-center">
          <h2 className="tracking-wide text-base text-teal-600 font-semibold uppercase">Featured Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg" />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{course.description}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Instructor: {course.instructor}</p>
                <div className="">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                  >
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">${course.price}</span>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.5rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-950"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
