function Offerings() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <h2 className="display-6 fw-bold text-body-emphasis mb-3">
        What's coming
      </h2>
      <div className="row gx-3 gx-md-4 gy-3 gy-md-4 align-items-center">
        <div className="col-md-6">
          <div className="modal-content rounded-4 cbg flex-fill">
            <div className="card-body d-flex align-items-center">
              <img
                src="./fire.svg" // Replace with your image path
                alt="Daily Horoscope"
                className="me-3"
                height="50"
              />
              <div>
                <h5 className="card-title mb-0">Daily Chinese Horoscope:</h5>
                <p className="card-text lead lh-1 mtxt p-3">
                  Discover what the stars have in store for you today. Get
                  insights into your current Chinese zodiac sign and
                  personalized horoscope predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="modal-content rounded-4 cbg flex-fill">
            <div className="card-body d-flex align-items-center">
              <img
                src="./random.svg" // Replace with your image path
                alt="Fortune Subscription"
                className="me-3"
                height="50"
              />
              <div>
                <h5 className="card-title mb-0">
                  Subscription for Daily Fortune:
                </h5>
                <p className="card-text lead lh-1 mtxt p-3">
                  Sign up to receive daily fortune updates straight to your
                  inbox. Stay informed about your fortune for the day with our
                  free subscription service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4"></div> {/* Add space between rows */}
      <div className="row gx-3 gx-md-4 gy-3 gy-md-4 align-items-center">
        <div className="col-md-6">
          <div className="modal-content rounded-4 cbg flex-fill">
            <div className="card-body d-flex align-items-center">
              <img
                src="./fortune.svg" // Replace with your image path
                alt="Random Number Generator"
                className="me-3"
                height="50"
              />
              <div>
                <h5 className="card-title mb-0">Random Number Generator:</h5>
                <p className="card-text lead lh-1 mtxt p-3">
                  Need a random number for your zodiac sign or a specific range?
                  Use our generator to get the perfect number tailored just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="modal-content rounded-4 cbg flex-fill">
            <div className="card-body d-flex align-items-center">
              <img
                src="./wheel.svg" // Replace with your image path
                alt="Wheel of Fortune"
                className="me-3"
                height="50"
              />
              <div>
                <h5 className="card-title mb-0">Wheel of Fortune:</h5>
                <p className="card-text lead lh-1 mtxt p-3">
                  Let fate decide with our Wheel of Fortune. Whether it's making
                  decisions or seeking guidance, spin the wheel for an answer
                  from the universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;