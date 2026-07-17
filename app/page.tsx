import learningPlan from "../data/learningPlan.json";

export default function Home() {
  const today = learningPlan[0];

  const progress = 12;
  const totalDays = 30;

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-green-50
      via-[#F7FAF7]
      to-white
      px-4
      py-6
      "
    >

      <div className="mx-auto max-w-md space-y-5">


        {/* Hero */}

        <section
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-md
          "
        >

          <div className="flex items-center justify-between">


            <div className="flex items-center gap-4">


              <div
                className="
                relative
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-green-100
                text-4xl
                animate-bounce
                "
              >
                🐸
              </div>


              <div>

                <h1
                  className="
                  text-2xl
                  font-bold
                  tracking-tight
                  "
                >
                  FrogOps
                </h1>


                <p className="mt-1 text-sm text-gray-500">
                  You Could Be Better.
                </p>

              </div>


            </div>



            <div
              className="
              rounded-2xl
              bg-green-50
              px-3
              py-2
              text-center
              "
            >

              <p className="text-xs text-gray-400">
                LEVEL
              </p>

              <p className="
              text-xl
              font-bold
              text-green-600
              ">
                2
              </p>

            </div>


          </div>



          {/* Companion */}

          <div
            className="
            mt-6
            rounded-2xl
            bg-green-50
            p-4
            "
          >

            <p className="text-sm text-green-700">
              Good morning, Explorer 👋
            </p>


            <p
              className="
              mt-2
              text-sm
              text-gray-600
              "
            >
              小青蛙已经准备好了，
              今天一起完成一个新的 Product Ops Challenge 吧！
            </p>


          </div>



          {/* Streak */}

          <div
            className="
            mt-4
            flex
            justify-between
            text-sm
            "
          >

            <span>
              🔥 7 days streak
            </span>


            <span className="text-gray-500">
              240 XP
            </span>


          </div>


        </section>





        {/* Mission */}


        <section
          className="
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-sm
          transition
          hover:-translate-y-1
          hover:shadow-lg
          "
        >


          <div
            className="
            bg-gradient-to-r
            from-green-500
            to-emerald-400
            p-6
            text-white
            "
          >


            <div className="flex justify-between">


              <div>

                <p className="text-sm opacity-90">
                  TODAY'S MISSION
                </p>


                <h2 className="
                mt-2
                text-3xl
                font-bold
                ">
                  Day {today.day}
                </h2>


              </div>



              <div
                className="
                rounded-full
                bg-white/20
                px-4
                py-2
                text-sm
                "
              >
                +50 XP
              </div>


            </div>


          </div>




          <div className="p-6">


            <h3
              className="
              text-xl
              font-bold
              "
            >
              Product Ops English
            </h3>



            <p
              className="
              mt-2
              text-sm
              text-gray-500
              "
            >
              Learn workplace English through real product scenarios.
            </p>




            <div
              className="
              mt-5
              flex
              gap-3
              "
            >

              <div
                className="
                rounded-xl
                bg-gray-100
                px-3
                py-2
                text-sm
                "
              >
                ⏱ 10 min
              </div>


              <div
                className="
                rounded-xl
                bg-gray-100
                px-3
                py-2
                text-sm
                "
              >
                🎯 Challenge
              </div>


            </div>




            <a href={`/day/${today.day}`}>

              <button
                className="
                mt-6
                h-14
                w-full
                rounded-2xl
                bg-green-500
                text-lg
                font-bold
                text-white
                shadow-md
                transition
                hover:bg-green-600
                hover:scale-[1.02]
                active:scale-95
                "
              >
                Start Jump 🚀
              </button>


            </a>


          </div>


        </section>







        {/* Progress */}


        <section
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >

          <div className="flex justify-between">


            <h2 className="font-bold">
              Journey Progress
            </h2>


            <span className="text-sm text-gray-500">
              {progress}/{totalDays}
            </span>


          </div>



          <div
            className="
            mt-4
            h-3
            overflow-hidden
            rounded-full
            bg-gray-100
            "
          >

            <div
              className="
              h-full
              rounded-full
              bg-green-500
              transition-all
              duration-1000
              "
              style={{
                width:`${progress / totalDays * 100}%`
              }}
            />

          </div>



          <p className="
          mt-3
          text-sm
          text-gray-500
          ">
            Next badge unlocks after 18 more jumps.
          </p>


        </section>







        {/* Achievement */}


        <section
          className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          "
        >

          <h2 className="font-bold">
            Frog Badges
          </h2>


          <div className="
          mt-4
          flex
          gap-3
          ">


            {[
              ["🌱","First Jump"],
              ["🔥","7 Days"],
              ["⭐","Next"]
            ].map((item,index)=>(

              <div
                key={index}
                className="
                flex-1
                rounded-2xl
                bg-green-50
                p-4
                text-center
                transition
                hover:-translate-y-1
                "
              >

                <div className="text-2xl">
                  {item[0]}
                </div>


                <p className="
                mt-2
                text-xs
                ">
                  {item[1]}
                </p>


              </div>


            ))}


          </div>


        </section>




        {/* Bottom */}

        <nav
          className="
          rounded-3xl
          bg-white
          p-4
          shadow-lg
          "
        >

          <div className="
          flex
          justify-around
          text-sm
          ">

            <span className="font-bold text-green-600">
              Home
            </span>

            <span className="text-gray-400">
              Learn
            </span>

            <span className="text-gray-400">
              Profile
            </span>


          </div>


        </nav>


      </div>

    </main>
  );
}