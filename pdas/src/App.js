import "bulma/css/bulma.css";
import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handel="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and help by thing."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handel="@cortana32"
                image={CortanaImage}
                description="Cortana was created by microsoft. Who know what it dose"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handel="@siri"
                image={SiriImage}
                description="Siri was created by Apple."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
