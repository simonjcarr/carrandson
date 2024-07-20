<template>
    <section>
        <div
          class="mt-4  p-5 text-gray-700 rounded border"
          style="background-color: #cfcbc6;  border-color: #ccbca9; border-width: 2px;"
        >
          <h2 class="pb-2 text-2xl font-semibold">Contact us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <form action="">
                  <div class="mb-4">
                      <label for="name" class="block text-lg">Name:</label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full md:w-[50%] text-gray-900 p-2 border border-gray-500 rounded"
                      />
                  </div>
                  <div class="mb-4">
                      <label for="email" class="block text-lg">Email:</label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full md:w-[50%] text-gray-900 p-2 border border-gray-500 rounded"
                      />
                  </div>
                    <div class="mb-4">
                        <label for="phone" class="block text-lg">Phone:</label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        class="w-full md:w-[50%] text-gray-900 p-2 border border-gray-500 rounded"
                        />
                    </div>
                  <div class="mb-4">
                      <label for="message" class="block text-lg">Message:</label>
                      <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="4"
                      class="w-full md:w-[50%] text-gray-900 p-2 border border-gray-500 rounded"
                      ></textarea>
                  </div>
                  <button
                      type="submit"
                      class="bg-gray-900 text-gray-200 p-2 rounded hover:bg-gray-800"
                  >
                      Submit
                  </button>
              </form>
            </div>
            
            <div>
              <address>
                <div class="text-lg">
                  <p class="font-semibold">Address:</p>
                  <p>5 Chestnut Ave</p>
                  <p>Penwortham, Preston</p>
                  <p>Lancashire, PR1 0PP</p>
                 
                </div>
                <div class="text-lg mt-2">
                  <p class="font-semibold">Phone:</p>
                  <p>07455169021</p>
                </div>
                <div class="text-lg mt-2">
                  <p class="font-semibold">Email:</p>
                  <p>
                    <a href="mailto:simonjcarr@gmail.com">simonjcarr@gmail.com</a>
                  </p>
                </div>
              </address>
            </div>
          </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
