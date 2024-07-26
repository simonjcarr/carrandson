<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="relative z-30">
        <div>
          <picture>
            <img
              src="~assets/images/garden-room.jpg"
              class="img"
              alt="Garden Room in Penwortham, preston built by Carr and Son with a arboured patio in the foreground"
            />
          </picture>
          <div class="img-text-overlay w-full">
            <div
              class="text-3xl text-left md:justify-center p-2 md:p-5 text-[1.7rem] md:text-[2rem]"
            >
              <h1>
                Garden rooms for year
                <p>round living and working</p>
              </h1>
            </div>
            <div
              class="image-sub-text hidden md:block text-2xl text-gray-200 p-2 md:p-5"
            >
              <h2>Custom built to your specification</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-30">
        <picture>
          <img
            src="~assets/images/garden-room-with-house.jpg"
            class="img"
            alt="Garden Room in Penwortham. preston built by Carr and Son with house in background"
          />
        </picture>
        <div class="img-text-overlay w-full">
          <div
            class="text-3xl text-left md:justify-center p-2 md:p-5 text-[1.7rem] md:text-[2rem]"
          >
            <h1>Extend your living area and add value to your home</h1>
          </div>
          <div
            class="image-sub-text hidden md:block text-2xl text-gray-200 p-2 md:p-5"
          >
            <h2>At lower cost and without planning permission</h2>
          </div>
        </div>
      </div>
      <div class="relative z-30">
        <picture>
          <img
            src="~assets/images/garden-room-with-composite-cladding.jpg"
            class="img"
            alt="An example of composite cladding on a garden room in Penwortham, Preston built by Carr and Son"
          />
        </picture>
        <div class="img-text-overlay w-full">
          <div
            class="text-3xl text-left md:justify-center p-2 md:p-5 text-[1.7rem] md:text-[2rem]"
          >
            <h1>High quality materials</h1>
          </div>
          <div
            class="image-sub-text hidden md:block text-2xl text-gray-200 p-2 md:p-5"
          >
            <h2>With option for zero maintenance composite cladding</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="text-left my-10 pb-10 bg-gray-100">
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0">
          <div class="md:px-40 pt-10">
            <h1 class="font-bold text-5xl md:text-6xl uppercase pb-10">Contact us</h1>
            <p class="text-left">
              
            </p>
            <p class="text-2xl text-left">
              <a
                class="font-bold text-orange-500  uppercase  hover:text-orange-700"
                href="#contact-us"
                >Contact Us</a
              >
              - Make the first step towards your own beautiful, custom built
              garden room by Carr & Son, covering Penwortham, Preston and Lancashire.
            </p>
          </div>
          
          
          <div class="md:px-40 pt-16 md:pt-10">
            <h1 class="font-bold text-5xl md:text-6xl uppercase pb-10">Find out more</h1>
            <p class="text-left">
              
            </p>
            <p class="text-2xl text-left">
              <a href="/about-our-garden-rooms" class="font-bold text-orange-500  uppercase  hover:text-orange-700">Find out more</a>
              
              about what makes our garden rooms stand out. We build to the highest standards with the best quality materials for a long lasting construction.
            </p>
          </div>
        </div>

        
      </section>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Styles to make the text layer on top of the image */
.img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: relative;
}

.img-text-overlay {
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 3rem;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.img-text-overlay.img-sub-text {
  font-size: 1rem !important;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
