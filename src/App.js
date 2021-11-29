import React from "react";
import "./styles.css";
import { useState } from "react";

const webseriesDB = {
  Action: [
    {
      name: "Money Heist",
      seasons: "4",
      rating: "8.2/10",
      description:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."
    },
    {
      name: "Narcos",
      seasons: "3",
      rating: "8.8/10",
      description:
        "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series. It centers around the notorious Colombian cocaine kingpin Pablo Escobar and Steve Murphy, a DEA agent sent to Colombia on a U.S. mission to capture him and ultimately kill him."
    },
    {
      name: "Sherlock",
      seasons: "4",
      rating: "9.1/10",
      description:
        "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases."
    },
    {
      name: "Cobra Kai",
      seasons: "3",
      rating: "8.6/10",
      description:
        "Thirty four years after events of the 1984 All Valley Karate Tournament, a down-and-out Johnny Lawrence seeks redemption by reopening the infamous Cobra Kai dojo, reigniting his rivalry with a now successful Daniel LaRusso."
    },
    {
      name: "Peaky Blinder",
      seasons: "5",
      rating: "8.8/10",
      description:
        "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities."
    }
  ],

  SciFi: [
    {
      name: "Dark",
      seasons: "3",
      rating: "8.8/10",
      description:
        "Dark is a series about factions of people, most of whom are related to one another through generations of small-town links, fighting for control of time travel."
    },
    {
      name: "Stranger Things",
      seasons: "4",
      rating: "8.7/10",
      description:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
    },
    {
      name: "Counterpart",
      seasons: "2",
      rating: "8.1/10",
      description:
        "Howard Silk, a low-level bureaucrat in an agency, is not in a good place in life. He discovers that the agency that employs him is a gateway to a new dimension."
    },
    {
      name: "Maniac",
      seasons: "1",
      rating: "7.7/10",
      description:
        "Two strangers are drawn to a mysterious pharmaceutical trial for a drug that will, they're assured, with no complications or side-effects whatsoever, solve all of their problems permanently. Things do not go as planned. Two strangers, Annie and Owen, sign up for a pharmaceutical test program."
    },
    {
      name: "The Magician",
      seasons: "5",
      rating: "7.6/10",
      description:
        "When Quentin gets enroled at Brakebills, a secret school for magicians, he learns that the fantasy world which he read about as a child is real and has become a threat to humanity."
    }
  ],

  Drama: [
    {
      name: "Game of Thrones",
      seasons: "8",
      rating: "9.2/10",
      description:
        "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men."
    },
    {
      name: "Queen's Gamebit",
      seasons: "1",
      rating: "8.6/10",
      description:
        "Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world."
    },
    {
      name: "Ozark",
      seasons: "3",
      rating: "8.4/10",
      description:
        "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss."
    },
    {
      name: "Lucifer",
      seasons: "6",
      rating: "8.1/10",
      description:
        "Lucifer Morningstar, bored from his sulking life in hell, comes to live in Los Angeles. While there, he helps humanity with its miseries through his experience and telepathic abilities to bring people's deepest desires and thoughts out of them."
    },
    {
      name: "The Crown",
      seasons: "4",
      rating: "8.6/10",
      description:
        "This show focuses on Queen Elizabeth II as a young newlywed faced with leading the world's most famous monarchy, while forging a relationship with legendary Prime Minister Sir Winston Churchill. The British Empire is in decline, the political world is in disarray, but a new era is dawning."
    }
  ],

  KDrama: [
    {
      name: "Squid Games",
      seasons: "1",
      rating: "8.1/10",
      description:
        "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly."
    },
    {
      name: "It's okay not to be okay",
      seasons: "1",
      rating: "8.7/10",
      description:
        "A road to emotional healing opens up for an antisocial children's book author and an employee in a psychiatric hospital."
    },
    {
      name: "Itaewon Class",
      seasons: "1",
      rating: "8.2/10",
      description:
        "'Itaewon Class' Is A Story Of Revenge, Romance And Rebellion From South Korea. ... The story of a group of social outcasts who come together to take down an exploitative business mogul, 'Itaewon Class' is a revenge epic, a love story and a social commentary all at once."
    },
    {
      name: "Goblin",
      seasons: "1",
      rating: "8.6/10",
      description:
        "Kim Shin, an immortal goblin, goes to find a human bride to remove an invisible sword from his chest and end his life. One day,school student Ji Eun-Tak confesses to him that she is the chosen one."
    },
    {
      name: "Crash Landing on you",
      seasons: "1",
      rating: "8.7/10",
      description:
        "A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide."
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Drama");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  const webseriesGenre = Object.keys(webseriesDB);

  return (
    <div className="App">
      <h1>🎬 WEBSERIES </h1>
      <p style={{ font: "smaller" }}>
        Checkout my favorite webseries to get started 📺
      </p>

      <div>
        {webseriesGenre.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.8rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {webseriesDB[genre].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "26px", fontWeight: "600" }}>
                {series.name}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  marginTop: "0.2rem",
                  marginBottom: "0.2rem"
                }}
              >
                {series.description}
              </div>
              <div style={{ fontSize: "22px" }}>Seasons - {series.seasons}</div>
              <div style={{ fontSize: "16px", marginTop: "0.2rem" }}>
                IMDb - {series.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
