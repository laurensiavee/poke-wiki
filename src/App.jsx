import React from "react";
import Info from "./Info";


function App() {
  return (
    <div>
      {/* search bar */}
      <section class="p-5 mt-9">
        <div class="ms-0 mb-5">
          <h2 class="text-2xl text-center text-white roboto"><b>Search Pokemon</b></h2>
          <div class="py-5">
            <div class="px-9">
              <form class="text-center" action="/search" method="post">
                <input type="text" id="search-bar" placeholder="Search" aria-label="Search" 
                  class="block w-full p-2 border border-gray-300 rounded-lg" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* info */}
      <Info />
    </div>
  );
}

export default App;
