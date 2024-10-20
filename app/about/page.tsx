import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 py-32">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 flex w-full items-center justify-center md:mb-0 md:w-1/3">
              <div className="relative h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex w-full flex-col justify-center md:w-2/3">
              <h1 className="mb-4 text-4xl font-bold text-gray-800">
                About Me
              </h1>
              <p className="mb-4 text-lg text-gray-600">
                Hello! I&apos;m Peter, a passionate software developer and tech
                enthusiast. I created this blog to share my experiences, tips,
                and tutorials on various programming languages and technologies.
                I believe that learning should be a continuous journey, and
                I&apos;m here to help others on their path to mastering the art
                of coding.
              </p>
              <p className="text-lg text-gray-600">
                Whether you&apos;re just starting out or looking to sharpen your
                skills, you&apos;ll find a variety of resources and insights
                here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Peter&apos;s Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From curious beginner to seasoned developer, here&apos;s how Peter
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/3.jpg"
                  alt="Harry as a beginner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:mt-0 md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600">
                  Peter’s coding journey began in high school when he stumbled
                  upon his first programming language—Python. What started as a
                  simple curiosity quickly turned into a passion, as Harry spent
                  countless hours experimenting with code, building small
                  projects, and learning the fundamentals of software
                  development.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <img
                  src="/2.jpg"
                  alt="Peter learning new skills"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:mt-0 md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600">
                  After mastering the basics, Peters’s thirst for knowledge
                  grew. He began exploring more complex topics such as data
                  structures, algorithms, and web development. Enrolling in
                  online courses and attending coding bootcamps, Harry quickly
                  expanded his skill set, taking on freelance projects to apply
                  his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img
                  src="/1.jpg"
                  alt="Harry working on a big project"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:mt-0 md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600">
                  With several years of experience under his belt, Peter began
                  tackling more significant challenges. From contributing to
                  open-source projects to developing his own applications, Peter
                  continued to push his limits, always looking for opportunities
                  to learn and grow. His journey wasn’t without its setbacks,
                  but each obstacle was a stepping stone to becoming the skilled
                  developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <img
                  src="/4.jpg"
                  alt="Harry mentoring others"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8 md:mt-0 md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600">
                  Today, Peter is not only a proficient coder but also a mentor
                  to others. He regularly contributes to the programming
                  community by writing tutorials, giving talks, and helping new
                  coders find their footing in the world of software
                  development. For Harry, coding is more than just a
                  profession—it’s a lifelong journey of learning and sharing
                  knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
