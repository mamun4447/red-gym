import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex">
        <div className="avatar pr-2">
          <div className="w-16 rounded-full">
            <img alt="" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div>
          <h3 className="text-xl">Abdullah Al-Mamun</h3>
          <p>Pabna,Bangladesh</p>
        </div>
      </div>

      {/* Details  */}

      <div className="flex  justify-around mt-3 bg-slate-200 p-2 rounded">
        {/* Single item */}
        <div>
          <h3>
            75 <span>kg</span>
          </h3>
          <p>Weight</p>
        </div>
        {/* Single item */}
        <div>
          <h3>
            5.3 <span>fit</span>
          </h3>
          <p>Height</p>
        </div>
        {/* Single item */}
        <div>
          <h3>
            23 <span>year</span>
          </h3>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
