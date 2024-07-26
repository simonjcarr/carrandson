<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-[100%] bg-gray-100 p-5 py-10">
      <div
        class=" rounded   font-semibold "
        
        v-for="block in blockContent"
        :key="block.title"
      >
        <div class="rounded">
          <h3
            class=" font-bold  text-orange-500 text-2xl md:text-3xl uppercase"
          >
            {{ block.title }}
          </h3>
        </div>
        <div class="pt-2 text-gray-900 text-lg font-normal text-justify" >
          <article class="">
            <div class="h-[200px] text-xl">
              {{ block.content }}
            </div>
            <div class="">
              <div>
                <img :src="block.image" class="h-[300px] mx-auto" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '~/assets/images/garden-room-with-composite-cladding.jpg'
import img2 from '~/assets/images/garden-room-with-house.jpg'
import img3 from '~/assets/images/garden-room-foundation-system.jpg'
const blockContent = [
  {
    title: "Your room your way",
    content:
      "All our garden rooms are custom built to your specification. We can help you design the perfect space for your family needs.",
      image: img1
  },
  {
    title: "Add value to your property",
    content:
      "A quality built garden room will add value to your property. With flexible working here to stay, a garden room is a great investment that will add value to your property.",
      image: img2
  },
  {
    title: "Long lasting construction",
    content:
      "All our garden rooms are built to last decades. We use the highest quality materials for the construction. Every garden room is built in such a way that no part touches the ground to prevent rotting and to allow air to ventalate under the floor.",
      image: img3
  },
  // {
  //   title: "Year round living",
  //   content:
  //     "Our garden rooms are insulated with high quality PIR 100mm solid insulation in the roof and floor and 50mm in the walls. This keeps the warmth in during winter and cool in the summer.",
  // },
  // {
  //   title: "Aluminium Bi-Fold doors",
  //   content:
  //     "By default our garden rooms come with aluminium bi-fold doors. These are high quality, long lasting and allow you to open your room up to the garden or patio. You can choose to have blinds built into the galzing.",
  // },
  // {
  //   title: "Certified electrical installation",
  //   content:
  //     "We will install a certified electrical installation in your garden room. This includes sockets, lights and heating. We will run armoured cable from your house to a consumer unit in the garden room.",
  // },
  // {
  //   title: "Beautiful lighting installation",
  //   content:
  //     "Both indoor and outdoor lighting will be installed in your garden room. You can choose from white or RGB lighting all of which can be optionally controlled from your phone or alexa, providing a scene to suit any mood.",
  // },
  // {
  //   title: "Long lasting roof",
  //   content:
  //     "Our garden rooms are topped off with a high quality rubber roof that is mainteance free and will provide decades of protection from the elements, while looking smart at the same time.",
  // },
  // {
  //   title: "Your choice of cladding",
  //   content:
  //     "You can choose from a range of cladding options for your garden room. We reconmend composite cladding that has a real wood effect, but requires zero maintence so you can just enjoy your garden room.",
  // },
];
</script>

<style lang="scss" scoped></style>
