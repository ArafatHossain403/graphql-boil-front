import React from 'react';

const ListCard = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {/* Card 1 */}
        <div className="card card-compact bg-base-100 shadow-md">
          <figure>
            <img
              src="https://example.com/live-session.jpg"
              alt="Live session image"
              className="rounded-t-lg"
            />
            <div className="absolute top-4 left-4 bg-white px-2 py-1 text-xs font-semibold rounded">
              Live
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer">
              🔗
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Join the Living Room Session with Doja Cat
            </h2>
            <p>Hosted by Doja Cat</p>
            <p className="font-semibold">$77 per guest</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card-compact bg-base-100 shadow-md">
          <figure>
            <img
              src="https://example.com/prince-house.jpg"
              alt="Prince house image"
              className="rounded-t-lg"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer">
              🔗
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Stay in Prince’s Purple Rain house</h2>
            <p>Hosted by Wendy and Lisa</p>
            <p className="text-red-500 font-semibold">Booking closed</p>
          </div>
        </div>

        {/* Add more cards as needed */}
      </div>
    );
};

export default ListCard;