import React from "react";

function page() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="w-full h-[150px] bg-[url('https://static.zohocdn.com/zohopeople/people5/images/home/ms-bg1.cf61c5105e0c3ad64d41c54d6a0f22f8.jpg')] bg-cover bg-center"></div>

      <div className="max-w-[1400px] mx-auto px-4 -mt-10">
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="w-full lg:w-[25%] space-y-4">
            <div className="bg-white rounded-l-2xl p-4">
              <div className="flex justify-center -mt-12">
                <img
                  src="https://people.zoho.in/qrioustech/viewPhoto?erecno=196212000003065015&mode=2&avatarid=15"
                  alt="profile"
                  className="w-24 h-24 rounded-xl shadow object-cover"
                />
              </div>

              <div className="text-center mt-3">
                <h2 className="font-semibold text-md">1027 - Man Lakhani</h2>
                <p className="text-gray-500 text-sm">
                  Junior Software Engineer
                </p>
                <p className="text-green-600 mt-2">Work from Office</p>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <div className="bg-gray-100 px-3 py-2 rounded-lg font-semibold">
                  02
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg font-semibold">
                  06
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg font-semibold">
                  50
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button className="mt-4 border border-red-400 text-red-500 py-1 rounded-lg px-4">
                  Check-out
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-700 mb-3">Reporting To</h3>

              <div className="flex items-center gap-3">
                <img
                  src="https://people.zoho.in/qrioustech/viewPhoto?erecno=196212000003065015&mode=2&avatarid=15"
                  alt="manager"
                  className="w-12 h-12 rounded-lg object-cover"
                />

                <div>
                  <p className="text-sm text-gray-600">1 - Harsh Patel</p>
                  <p className="text-green-600 font-semibold text-sm">
                    Work from Office
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                Department Members
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://people.zoho.in/qrioustech/viewPhoto?erecno=196212000003065015&mode=2&avatarid=15"
                    alt="member"
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-600">1 - Deep Shah</p>
                    <p className="text-green-600 font-semibold text-sm">
                      Work from Office
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[75%] space-y-4">
            <div className="bg-white rounded-xl shadow px-4">
              <div className="flex gap-6 overflow-x-auto whitespace-nowrap py-3 text-gray-700 font-medium">
                <button className="border-b-2 border-blue-500 pb-2 font-semibold">
                  Activities
                </button>

                <p className="pb-2 hover:text-blue-600">Feeds</p>
                <p className="pb-2 hover:text-blue-600">Profile</p>
                <p className="pb-2 hover:text-blue-600">Approvals</p>
                <button className="pb-2 hover:text-blue-600">Leave</button>
                <button className="pb-2 hover:text-blue-600">Attendance</button>
                <button className="pb-2 hover:text-blue-600">Time Logs</button>
                <button className="pb-2 hover:text-blue-600">Timesheets</button>
                <button className="pb-2 hover:text-blue-600">Jobs</button>
                <button className="pb-2 hover:text-blue-600">Files</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src="https://contacts.zoho.in/file?ot=33&ID=60036170310&t=serviceorg"
                    alt=""
                  />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">
                    Good Afternoon Man Lakhani
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Have a productive day!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h2 className="font-semibold text-lg">Upcoming Holidays</h2>
              <p className="text-gray-500 text-sm">List of upcoming holidays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
