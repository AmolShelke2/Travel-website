import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1248px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, ratione? Cum eos sed praesentium suscipit et qui
            dolore recusandae a. Facilis rem laudantium sed atque totam officiis
            numquam dolore molestiae blanditiis sint deleniti, aliquid cum culpa
            odio. Non totam assumenda earum, est laborum ut corrupti beatae
            illum, rerum nam delectus harum ipsam similique optio hic unde,
            officia laboriosam? Fugiat vitae laborum doloremque asperiores,
            rerum magni eveniet ea nulla, tenetur distinctio vel ullam officiis
            voluptates veniam cupiditate? Earum, tempore non consequatur cumque
            sunt
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                placeat?
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                placeat?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="py-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">-BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigua</option>
              <option>Key west</option>
              <option>Maldives</option>
              <option>Cozumail</option>
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
