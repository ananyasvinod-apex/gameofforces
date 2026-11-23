/* =====================================================================
   GAME OF FORCES — YOUR SERIES AND POSTS LIVE HERE
   ---------------------------------------------------------------------
   To publish a new post: copy one { ... } block below, paste it at the
   TOP of the POSTS list, change the fields, save, and push to GitHub.
   Vercel redeploys automatically.

   Post fields:
     section     which series it belongs to (a key from SECTIONS below)
     slug        unique id used in the URL (lowercase, dashes, no spaces)
     title       headline
     season      e.g. 2026
     round       optional: round number (shown as a badge, e.g. R21)
     badge       optional: badge text instead of the round, e.g. "Issue 1"
     sport       optional: the sport (shown on the card, used as a filter)
     gp          optional: event name (e.g. Grand Prix), used as the card heading
     circuit     optional: venue name
     date        YYYY-MM-DD (posts are sorted newest first by this)
     summary     one or two sentences for the card on the home page
     cover       optional image shown on the card and at the top of the post
     tags        optional list of short words
     upgrades    optional (LAPTHESIS): the upgrade table, one row per part
                   team, component, reason ("Performance",
                   "Circuit specific", "Reliability" or anything else),
                   detail
     noUpgrades  optional list of teams that brought nothing this round
     body        the article itself, written in Markdown inside backticks
                 (## headings, **bold**, - lists, > quotes, links, images)

   Images: make a folder in images/ for each post (e.g. images/2026-qatar)
   and reference files like  ![description](images/2026-qatar/map.png)
   ===================================================================== */

/* Your series. To start a new one (say, football):
     1. add an entry here, e.g.  football: { name: "...", sport: "Football", ... }
     2. copy the lapthesis folder, rename the copy to the same key (football),
        and in its index.html change data-section="lapthesis" to data-section="football"
        and edit the hero text.
     3. give your posts  section: "football"                                 */
window.SECTIONS = {
  lapthesis: {
    name: "LAPTHESIS",
    sport: "Formula 1",
    tagline: "The technical upgrades every team brings, broken down before each Grand Prix.",
    accent: "#e10600",
    onAccent: "#ffffff",
    path: "lapthesis/index.html"
  },
  "winning-formula": {
    name: "The Winning Formula",
    sport: "Multi-sport newsletter",
    tagline: "Where sports meet science: the science behind every game, made simple and fun for students.",
    accent: "#4f7bff",
    onAccent: "#ffffff",
    cover: "images/winning-formula-issue-1/issue1-cover.png",
    path: "winning-formula/index.html"
  }
};

window.TEAM_COLORS = {
  "McLaren": "#ff8000",
  "Ferrari": "#e8002d",
  "Red Bull": "#3671c6",
  "Mercedes": "#27f4d2",
  "Aston Martin": "#229971",
  "Alpine": "#ff87bc",
  "Williams": "#64c4ff",
  "Racing Bulls": "#6692ff",
  "Haas": "#b6babd",
  "Audi": "#c0c0c0",
  "Cadillac": "#d4af37"
};

window.POSTS = [
  /* ---------------- THE WINNING FORMULA ------------------------------ */
  {
    section: "winning-formula",
    slug: "twists-turns-and-wickets",
    title: "Twists, Turns & Wickets",
    badge: "Issue 1",
    sport: "Cricket",
    season: 2026,
    date: "2026-05-01",
    summary: "How a stitched leather ball can curve, jag and dip its way past the world's best batters: swing, seam and spin, explained.",
    cover: "images/winning-formula-issue-1/cricket-banner.png",
    tags: ["swing", "seam", "spin", "aerodynamics"],
    body: `
**Read time:** 4 min · **Topic:** Physics & biomechanics · **Level:** Beginner

If you've ever watched a batter get beaten by a ball that curved, jagged or dipped at the last moment, you've seen one of cricket's great mysteries.

Whether it's a Jasprit Bumrah inswinger, a Mohammed Shami delivery that nips off the seam, or a Ravichandran Ashwin off-spinner turning sharply, each comes down to physics and biomechanics working together.

Bowlers make the ball move in three ways: swing, seam and spin. Each challenges batters differently, and scientists are still learning how bowlers achieve them.

*Seems difficult to understand, right? Let's break it down!*

## Swing bowling: curve in the air

Swing bowling is when the ball curves in the air before reaching the batter. Fast bowlers use it to surprise batters and make the ball move at the last moment.

**How it works:** air moves differently on each side of the ball.

With a new shiny ball, bowlers keep the seam slightly tilted so the ball swings in one direction. Bhuvneshwar Kumar is famous for this.

As the ball ages, one side becomes rough while the other stays shiny. This changes the airflow and makes it swing differently.

When the ball is very old and rough, it can suddenly swing the opposite way. This is called *reverse swing*. Jasprit Bumrah and Mohammed Shami are masters of it.

![Reverse swing: air flows faster over the shiny side, and the ball reverses toward the shine instead of away from it](images/winning-formula-issue-1/reverse-swing.png)

Bowlers also try to keep the seam straight and steady on release. A wobbling seam means a weaker swing.

> A wobbling seam means a weaker swing. Bowlers train for years to release the seam dead steady.

## Seam bowling: movement off the pitch

Seam bowling is different from swing bowling because the ball changes direction after it hits the pitch. This happens when the seam grips the ground and moves slightly sideways.

**How it works:**

- Fast bowlers release the ball with the seam angled or slightly wobbling instead of perfectly straight.
- When the seam hits the pitch, the ball can suddenly move left or right, making it tough for the batter to predict.
- Some pitches help more than others. Green or slightly wet pitches give the ball more grip. Dry and flat pitches give less movement.

For batters, seam movement is brutal because they often decide their shot before the ball bounces. Even a tiny change in direction can cause an edge, a miss, or an LBW.

## Spin bowling: rotation and friction

Spin bowling works differently. Instead of using speed, spinners make the ball rotate very fast so it drifts in the air and turns after bouncing.

**How it works:**

- Finger spinners like Ravichandran Ashwin spin the ball using their fingers.
- Wrist spinners like Kuldeep Yadav use wrist movement to create extra turn.
- Spin can also make the ball dip suddenly before reaching the batter. When the spinning ball lands on the pitch, friction helps it turn sideways.

Pitch conditions matter a lot. Dry, dusty Indian pitches help spinners because the ball grips the surface more.

In the end, cricket is so interesting because small things (the angle of the seam, the shine of the ball, or a flick of the wrist) can completely change where the ball goes.

## Glossary

- **Nips the seam:** when the ball changes direction slightly after pitching because the seam hits the ground at an angle.
- **Inswinger:** a delivery that curves in toward the batter through the air.
- **Reverse swing:** when a very old, rough ball swings the opposite way to a new ball.
- **LBW (Leg Before Wicket):** a method of dismissal where the batter's body blocks a ball that would have hit the stumps.
- **Finger spin:** spin created mainly by the fingers, used to turn the ball one way.
- **Wrist spin:** spin created by the wrist, often producing sharper turn.
`
  },
  {
    section: "winning-formula",
    slug: "the-angle-game",
    title: "The Angle Game",
    badge: "Issue 1",
    sport: "Badminton",
    season: 2026,
    date: "2026-05-01",
    summary: "Badminton looks fast and chaotic, but every winning shuttle comes down to one thing: angles. Smashes, net shots and cross-courts, broken down.",
    cover: "images/winning-formula-issue-1/badminton-banner.png",
    tags: ["angles", "smash", "geometry"],
    body: `
Badminton looks fast and chaotic, but every shuttle that lands in the right spot comes down to one thing: angles.

![Badminton player jumping for a smash](images/winning-formula-issue-1/badminton-player.png)

Whether it's a sharp smash from PV Sindhu, a deceptive net shot from Lin Dan, or a cross-court flick from Lakshya Sen, players are constantly using angles to make the shuttle land where their opponent can't reach.

Players use angles in three main ways: smash angles, net angles, and court coverage angles. Each one creates a different problem for the opponent.

*Seems difficult to understand, right? Let's break it down!*

## Smash angles

Smash angles are the steepest and most powerful shots in badminton. The steeper the angle, the harder it is for the opponent to return.

**How it works:**

- The shuttle travels fastest when hit downward from a high contact point.
- Taller players, or players who jump high (like Viktor Axelsen), can hit smashes at sharper angles, giving opponents less time to react.
- The angle of the racket head at the moment of contact decides where the shuttle goes. Even a small tilt can send it sharply left, right or straight down the line.

Good smashers also aim for the body of the opponent. A smash angled at the chest or shoulder is hard to return because the player has to move the racket out of the way before swinging.

When the smash is too flat, opponents have more time and can lift it back. So players train for years to get the steep, sharp angle that makes the shot unreturnable.

## Net angles

Net angles are very different from smashes. Instead of using power, players use precision and a soft touch to drop the shuttle just over the net.

**How a good net shot works:**

- A good net shot uses a very small angle. The racket is tilted gently so the shuttle barely crosses the net before falling.
- The lower the shuttle drops on the opponent's side, the harder it is for them to lift it back. This forces them into a weak return that can be smashed.
- Players like Marcus Fernaldi Gideon and Kevin Sanjaya are famous for their net angles because they can disguise the shot until the last second.

Net kills happen when the opponent lifts the shuttle too high and a player slices it down at a sharp angle right at the net. The smaller the angle, the more skill it takes. Net shots are won and lost by millimetres.

## Cross-court angles

Cross-court angles stretch the opponent to the far corners of the court. The wider the angle, the longer the distance they have to run.

**How cross-court shots work:**

- A cross-court shot is hit diagonally instead of straight down the line, so the shuttle travels a longer path through the air.
- This gives the opponent more time to react but also forces them to cover more ground. If they are already out of position, a wide cross-court shot can win the point instantly.
- Double corners are a clever trick. Players hit one shot to the front corner, then a cross-court shot to the back corner, making the opponent run diagonally across the entire court.

> **Did you know?** A badminton smash has been clocked at over 565 km/h, making the shuttlecock the fastest projectile in any racket sport.

In the end, badminton is so interesting because the same shot can win or lose a point depending on just a few degrees of angle.

## Glossary

- **Net shot:** a delicate shot played just over the net to make the opponent lift the shuttle.
- **Double corners:** hitting front then back corners to force the opponent into diagonal running.
- **Disguise:** hiding the shot's intent until the last second to fool the opponent.
- **Net kill:** a sharp downward shot played right at the net when the opponent lifts the shuttle too high.
`
  },

  /* ---------------- LAPTHESIS ---------------------------------------- */
  {
    section: "lapthesis",
    slug: "2026-las-vegas-upgrades",
    title: "Trimming drag for the Strip",
    season: 2026,
    round: 21,
    gp: "Las Vegas Grand Prix",
    circuit: "Las Vegas Strip Circuit",
    date: "2026-11-20",
    summary: "Cold track, long straights and the fight for P3 in the constructors'. Mercedes lead a grid-wide push to cut drag, while McLaren keep developing the floor.",
    cover: "images/2026-las-vegas/image6.png",
    tags: ["low-drag", "floor", "rear-wing"],
    upgrades: [
      { team: "McLaren", component: "Floor board & floor edge", reason: "Performance", detail: "New design developed alongside the diffuser to improve airflow management and increase aerodynamic load." },
      { team: "McLaren", component: "Rear floor furniture", reason: "Performance", detail: "Manipulates airflow around the rear corner and diffuser to improve overall aerodynamic efficiency." },
      { team: "Mercedes", component: "Rear wing winglets", reason: "Circuit specific", detail: "Several winglet elements removed, reducing local downforce and drag." },
      { team: "Mercedes", component: "Mirror rear stay trim", reason: "Circuit specific", detail: "Modified to reduce its aerodynamic loading." },
      { team: "Mercedes", component: "Rear corner winglets", reason: "Circuit specific", detail: "Position and span optimised for a better balance between downforce and drag." },
      { team: "Mercedes", component: "Engine cover rear exit", reason: "Circuit specific", detail: "Narrower exit for a cooling configuration suited to the lower cooling needs in Las Vegas." },
      { team: "Red Bull", component: "Front wing endplate dive-plane", reason: "Performance", detail: "Lowered with a shorter chord to stabilise airflow around the endplate footplate and downstream surfaces." },
      { team: "Ferrari", component: "Front floor board elements", reason: "Circuit specific", detail: "Includes a single vertical element. Trades downforce for lower drag and a better efficiency ratio for the circuit." },
      { team: "Racing Bulls", component: "Floor board elements", reason: "Circuit specific", detail: "Shortened to reduce the load generated by the floor board." },
      { team: "Racing Bulls", component: "Rear brake drum winglets", reason: "Circuit specific", detail: "Modified for a more efficient reduction in aerodynamic load." },
      { team: "Racing Bulls", component: "Front wing flap", reason: "Circuit specific", detail: "Lower-balance flap with reduced chord and incidence, for less front wing load and a wider balance range." },
      { team: "Haas", component: "Rear wing (Straight Mode)", reason: "Performance", detail: "Tests an alternative rear wing deployment configuration to find a different way of cutting drag on the straights." },
      { team: "Audi", component: "Rear brake duct deflector", reason: "Circuit specific", detail: "Geometry changed for the circuit's efficiency needs, aiming to reduce drag." }
    ],
    noUpgrades: ["Williams", "Aston Martin", "Alpine", "Cadillac"],
    body: `
The Las Vegas Strip Circuit, located in Las Vegas, Nevada, is home to the 21st round of the Formula 1 World Championship.

## The Circuit

![Las Vegas Strip Circuit layout](images/2026-las-vegas/image3.png)

The Las Vegas Strip Circuit, located in the middle of the bustling city of Las Vegas, is home to one of the most incredible backdrops in all of racing. This 6.201 km circuit consists of 17 corners and 3 straights, one of them along the famous Las Vegas Strip. The very cold conditions pose a challenge to drivers and teams alike, so keep an eye on tyre warm-up this weekend, as it is about to play a major role.

Las Vegas first hosted an F1 Grand Prix in 2023, so this is only its 4th ever edition. The track has plenty of overtaking opportunities, which has led many teams to give their drivers new engine parts, since penalties are manageable here. Since Mercedes brought a new turbo under their ADUO allowance, plenty of their customer teams, and Mercedes themselves, have taken this new part, leading to many drivers taking these penalties.

Last year, despite not taking pole in a wet qualifying, Max Verstappen took victory by over 23 seconds, with the Mercedes drivers taking the other two spots on the rostrum. The standout moment was that both McLarens were disqualified for excessive plank wear, i.e. they ran their cars too close to the ground.

## Championship Standings

![Championship standings](images/2026-las-vegas/image1.png)

The Constructors' Championship was wrapped up in São Paulo, with Mercedes winning their first title in over 4 years, and Ferrari seem to have cemented their spot in second. The fight for third looks like it is going to the end. The pace of the Red Bulls and the McLarens at their strong circuits seems matched, and neither team seems willing to slip up, so keep a lookout for that too.

![Championship standings](images/2026-las-vegas/image2.png)

The reigning Formula 1 World Champion is Kimi Antonelli, who wrapped up the title in Mexico. The fight for P2 in the championship, though, is still very much on, with everyone from Max to Lando in outright contention for the spot. The gap between those two is roughly 33 points.

## McLaren Mastercard Formula 1 Team

![McLaren upgrades](images/2026-las-vegas/image7.png)

McLaren have introduced two updates to their floor furniture. The first is a new floor board and floor edge design, developed alongside the diffuser to improve airflow management and increase aerodynamic load. The second is a modification to the rear floor furniture, which aims to manipulate airflow around the rear corner and diffuser, improving overall aerodynamic efficiency.

## Mercedes-AMG Petronas Formula 1 Team

![Mercedes upgrades](images/2026-las-vegas/image4.png)

Mercedes have introduced four updates, primarily focused on reducing drag to suit the Las Vegas circuit. The team have removed several winglet elements from the rear wing, reducing local downforce and drag. They have also modified the mirror rear stay trim to reduce its aerodynamic loading. Additionally, the position and span of the rear corner winglets have been optimised to achieve a more suitable balance between downforce and drag. Finally, Mercedes have introduced a narrower engine cover rear exit, allowing for a different cooling configuration suited to the lower cooling requirements in Las Vegas.

## Oracle Red Bull Racing

![Red Bull upgrades](images/2026-las-vegas/image11.png)

Red Bull have introduced a modification to the front wing endplate dive-plane. The dive-plane has been lowered and its chord length reduced to improve the stability of airflow around the front wing endplate footplate and the aerodynamic surfaces further downstream. This is intended to maintain more consistent airflow and improve overall aerodynamic performance.

## Scuderia Ferrari HP

![Ferrari upgrades](images/2026-las-vegas/image8.png)

Ferrari have modified the front floor board elements, including a single vertical element, to better suit the aerodynamic requirements of the Las Vegas circuit. The main objective is to reduce aerodynamic drag while accepting a corresponding reduction in downforce. This trade-off is designed to provide a more favourable aerodynamic efficiency ratio for the circuit.

## Visa Cash App Racing Bulls

![Racing Bulls upgrades](images/2026-las-vegas/image9.png)

Racing Bulls have introduced three circuit-specific updates, all aimed at improving efficiency and reducing aerodynamic load. The floor board elements have been shortened to reduce the load generated by the floor board. The team have also modified the rear brake drum winglets to achieve a more efficient reduction in aerodynamic load. Finally, a lower-balance front wing flap with reduced chord and incidence is available to decrease front wing load and provide a wider range of aerodynamic balance.

## TGR Haas F1 Team

![Haas upgrades](images/2026-las-vegas/image5.png)

Haas have introduced a revised rear wing arrangement associated with the Straight Mode mechanism. This update is intended to evaluate an alternative rear wing deployment configuration, with minor accompanying modifications to accommodate the revised design. The main objective is to explore a different approach to reducing drag on the straights.

## Audi Revolut Formula 1 Team

![Audi upgrades](images/2026-las-vegas/image10.png)

Audi have introduced an updated rear brake duct deflector. Its geometry has been modified to meet the specific aerodynamic efficiency requirements of the Las Vegas circuit, with the aim of achieving a more suitable aerodynamic configuration and reducing drag.
`
  },

  /* ------------------------------------------------------------------ */
  {
    section: "lapthesis",
    slug: "2026-mexico-city-upgrades",
    title: "Cooling at 2,200 metres",
    season: 2026,
    round: 19,
    gp: "Mexico City Grand Prix",
    circuit: "Autódromo Hermanos Rodríguez",
    date: "2026-10-30",
    summary: "Thin air means bigger cooling louvres up and down the pit lane, while Antonelli needs just two points to become the youngest world champion in F1 history.",
    cover: "images/2026-mexico-city/image10.png",
    tags: ["cooling", "altitude", "power-unit"],
    upgrades: [
      { team: "McLaren", component: "Cooling louvre", reason: "Circuit specific", detail: "Larger louvre to cope with the circuit's power unit cooling requirements." },
      { team: "Red Bull", component: "Cooling louvre", reason: "Circuit specific", detail: "Enlarged for better power unit cooling, which also improves reliability." },
      { team: "Red Bull", component: "Sidepod", reason: "Performance", detail: "New design to help with local load distribution, i.e. downforce generation." },
      { team: "Ferrari", component: "Engine cover & cooling louvres", reason: "Circuit specific", detail: "Changed to handle the circuit-specific power unit cooling requirements." },
      { team: "Racing Bulls", component: "Engine cover (coke) & cooling louvres", reason: "Circuit specific", detail: "Modified cover and larger louvres for power unit cooling in the high-altitude conditions." },
      { team: "Audi", component: "Rear brake duct deflector", reason: "Performance", detail: "Increases aerodynamic load around the rear corner of the car." },
      { team: "Alpine", component: "Exhaust tailpipe vane", reason: "Circuit specific", detail: "Reprofiled to suit the high altitude and the circuit's aerodynamic requirements." }
    ],
    noUpgrades: ["Mercedes", "Williams", "Aston Martin", "Haas", "Cadillac"],
    body: `
The Autódromo Hermanos Rodríguez, located in Mexico City, Mexico, hosts the 19th round of the Formula 1 Championship.

## The Circuit

![Autódromo Hermanos Rodríguez layout](images/2026-mexico-city/image7.png)

The Autódromo Hermanos Rodríguez, located in the heart of Mexico City, is one of the most unique circuits on the Formula 1 calendar. This 4.304 km circuit consists of 17 corners and sits approximately 2,200 metres above sea level, making it the highest-altitude circuit on the calendar. The thin air creates its own challenges for the teams, affecting aerodynamic downforce, engine performance and cooling.

The circuit is famous for its long start-finish straight leading into Turn 1, which provides one of the best overtaking opportunities on the track. The stadium section, where the drivers race through the old Foro Sol baseball stadium, is another iconic feature of this circuit. Mexico City first hosted a Grand Prix in 1963 and has since become a favourite among drivers and fans.

The lap record currently stands at 1:17.774, set by Valtteri Bottas in 2021. The race lasts 71 laps, covering a total distance of 305.354 km. Max Verstappen holds the record for the most victories at this circuit, with five wins. Last year, Lando Norris took a dominant victory, with Charles Leclerc and Max Verstappen completing the podium.

## Championship Standings

![Constructors' standings](images/2026-mexico-city/image9.png)

In the teams' battle, Red Bull have now moved ahead of McLaren into 3rd place, with both teams currently tied on 355 points. Ferrari have also been closing the gap to Mercedes after a strong run of performances, although Mercedes still hold a 133-point advantage at the top. Racing Bulls have consolidated their position in 5th with 102 points, while Alpine sit 6th with 69 points, leaving a 33-point gap between the two teams with only five rounds remaining after Mexico.

![Drivers' standings](images/2026-mexico-city/image8.png)

The Drivers' Championship could be wrapped up in Mexico City, with Kimi Antonelli needing just 2 more points to secure his first World Championship. Following his victory in Austin, Antonelli leads George Russell by 123 points and Lewis Hamilton by 124 points. A ninth-place finish or better will guarantee him the championship, making him the youngest World Champion in Formula 1 history.

It's also extremely close between 2nd and 5th, with George Russell, Lewis Hamilton, Max Verstappen and Charles Leclerc separated by just 9 points. Charles Leclerc has started the weekend strongly, topping both Friday practice sessions, with Lando Norris and George Russell also showing impressive pace. Verstappen, however, has an additional challenge after receiving a one-place grid penalty following his collision with Liam Lawson in FP2.

## McLaren Mastercard Formula 1 Team

![McLaren upgrades](images/2026-mexico-city/image4.png)

McLaren have brought a minor tweak to their car for the Mexico City Grand Prix: a larger cooling louvre, which is responsible for cooling the power unit, to help cope with the circuit-specific requirements for the power unit.

## Oracle Red Bull Racing

![Red Bull upgrades](images/2026-mexico-city/image6.png)

Oracle Red Bull Racing have made similar changes to the cooling louvre, enlarging it for better power unit cooling, which in turn also improves reliability. They have also brought a new sidepod design to help with local load distribution, i.e. downforce generation.

## Scuderia Ferrari HP

![Ferrari upgrades](images/2026-mexico-city/image2.png)

Scuderia Ferrari HP have also brought changes to their engine cover and cooling louvres for the same reason as the teams above: to handle the circuit-specific power unit cooling requirements.

## Visa Cash App Racing Bulls

![Racing Bulls upgrades](images/2026-mexico-city/image5.png)

Visa Cash App Racing Bulls have also brought a modified coke/engine cover and larger cooling louvres to help with power unit cooling in the high-altitude conditions and elevation changes of the Mexico City Grand Prix.

## Audi Revolut F1 Team

![Audi upgrades](images/2026-mexico-city/image1.png)

Audi Revolut F1 Team have brought an updated rear brake duct deflector for the Mexico City Grand Prix. This update increases the aerodynamic load around the rear corner of the car, helping improve overall aerodynamic performance.

## BWT Alpine Formula 1 Team

![Alpine upgrades](images/2026-mexico-city/image3.png)

Alpine have introduced a reprofiled exhaust tailpipe vane for this weekend. The shape of the vane has been modified to suit the unique conditions in Mexico, taking into account the high altitude and the circuit's aerodynamic requirements.
`
  },

  /* ------------------------------------------------------------------ */
  {
    section: "lapthesis",
    slug: "2026-austin-upgrades",
    title: "COTA upgrades, simplified",
    season: 2026,
    round: 18,
    gp: "United States Grand Prix",
    circuit: "Circuit of The Americas",
    date: "2026-10-23",
    summary: "McLaren bring test items to the corners and diffuser, Ferrari chase floor downforce, and Racing Bulls throw everything at holding P5, as Antonelli eyes the title.",
    cover: "images/2026-austin/image5.png",
    tags: ["floor", "diffuser", "corner-furniture"],
    upgrades: [
      { team: "McLaren", component: "Front corner furniture", reason: "Performance", detail: "Test item. Improves flow conditioning, working with last round's front suspension changes." },
      { team: "McLaren", component: "Rear corner furniture", reason: "Performance", detail: "Test item. Aims for better local load distribution to help downforce generation." },
      { team: "McLaren", component: "Diffuser", reason: "Performance", detail: "New spec. Revised geometry to improve downforce across the speed range." },
      { team: "Red Bull", component: "Front floor endplate", reason: "Performance", detail: "Extra vane for better tyre temperature measurement while keeping similar flow and local load." },
      { team: "Red Bull", component: "Front corner", reason: "Reliability", detail: "Smaller elastomeric gaiter periphery to reduce the chance of it tearing mid-race." },
      { team: "Ferrari", component: "Sidepod inlet", reason: "Performance", detail: "Reduced inlet volume for better airflow." },
      { team: "Ferrari", component: "Floor", reason: "Performance", detail: "More floor downforce and more stability at the rear of the car." },
      { team: "Ferrari", component: "Diffuser", reason: "Performance", detail: "Optimises aerodynamic flow more efficiently." },
      { team: "Racing Bulls", component: "Front wing endplate", reason: "Performance", detail: "New endplate for better aerodynamic flow." },
      { team: "Racing Bulls", component: "Rear wing flaps", reason: "Performance", detail: "New flap elements for increased local load distribution." },
      { team: "Racing Bulls", component: "Floor board & leading edge", reason: "Performance", detail: "Changed to generate more load and downforce." },
      { team: "Racing Bulls", component: "Engine cover (coke region)", reason: "Performance", detail: "Better airflow, working with the new floor upgrades." },
      { team: "Audi", component: "Front brake duct", reason: "Performance", detail: "Better aerodynamic efficiency, with increased cooling." },
      { team: "Audi", component: "Floor board", reason: "Performance", detail: "New board for aerodynamic efficiency." },
      { team: "Audi", component: "Mirror stay", reason: "Performance", detail: "Reconfigured to complement the updated corner geometry." },
      { team: "Alpine", component: "Floor corner", reason: "Performance", detail: "Redesigned for local airflow and local load distribution." },
      { team: "Alpine", component: "Rear wing (2nd & 3rd flaps)", reason: "Performance", detail: "Modified for stability and overall load delivery." },
      { team: "Cadillac", component: "Floor fences", reason: "Performance", detail: "Improves flow conditioning and the MAC-26's aerodynamic efficiency." },
      { team: "Cadillac", component: "Cooling louvre", reason: "Reliability", detail: "Redesigned to improve power unit cooling with minimal effect on airflow." }
    ],
    noUpgrades: ["Mercedes", "Williams", "Aston Martin", "Haas"],
    body: `
The Circuit of The Americas, located in Austin, Texas, hosts the 18th round of the Formula 1 Championship.

## The Circuit

![Circuit of The Americas layout](images/2026-austin/image6.png)

COTA has 2 Straight Mode zones and 20 corners. As one of the most flowing, high-speed circuits on the calendar, it brings its own unique set of challenges to both the teams and the drivers. This 5.5 km circuit is famous for its sector 1, with the uphill run into Turn 1 being one of the most unique aspects of the track. A driver favourite, COTA hosted its first Grand Prix all the way back in 2012, and the fastest lap ever on this circuit belongs to Ferrari's Charles Leclerc, a 1:36.169 set in 2019.

The race lasts 56 laps, covering 308.432 km, and is filled with overtaking opportunities. It is also known for being heavily influenced by tyre strategy. Turn 12 remains one of the best overtaking spots, as the drivers come down the straight and brake hard into the corner. Turn 1 also offers a chance thanks to its uphill approach and the fact that it's a tight left-hander. Because of all these overtaking opportunities, the pole-to-win conversion rate at COTA is only around 46%, so pole isn't a huge advantage. Last year, Max Verstappen had a dominant lights-to-flag victory, with Lando Norris and Charles Leclerc completing the podium.

## Championship Standings

![Constructors' standings](images/2026-austin/image1.png)

In the teams' battle, the only two teams close enough to matter are Red Bull and McLaren. If Red Bull outscore McLaren by 8 or more points, they will move up to 3rd in the constructors', and looking at recent history it seems likely to happen sooner or later. VCARB seem to have consolidated their position in 5th: after a few bad weekends, Alpine have fallen 32 points back, which will be hard to overturn with only 6 races left this season.

![Drivers' standings](images/2026-austin/image10.png)

The Drivers' Championship can be wrapped up in Austin. Kimi Antonelli will claim the title if he wins this round, but he also depends on a few other results: George Russell needs to finish below 9th and Lewis Hamilton needs to finish outside the top 5. If all the stars align, Kimi can become the youngest world champion this sport has ever seen. It's also still tight between 2nd and 6th, with all of them within touching distance, even within a race win, of each other.

## McLaren Mastercard Formula 1 Team

![McLaren upgrades](images/2026-austin/image8.png)

![McLaren upgrades](images/2026-austin/image12.png)

McLaren have brought 3 major physical upgrades to Texas this time around, but bear in mind that Technical Director Rob Marshall has said most of them are test items. The majority of these new parts revise the corner furniture, with both the front and rear corners undergoing changes. They have also brought a new-spec diffuser to Round 18 of the Formula 1 calendar.

The corner furniture upgrades are intended to improve flow conditioning around the car, and the front corner changes work in tandem with the front suspension changes made last round. With the rear corner furniture changes, they are also hoping to see better local load distribution, which aids downforce generation. The changes to the diffuser geometry are also meant to help local load distribution, while focusing on improving downforce across the speed range.

## Oracle Red Bull Racing

![Red Bull upgrades](images/2026-austin/image4.png)

![Red Bull upgrades](images/2026-austin/image7.png)

Oracle Red Bull Racing have also brought a few subtle changes to their car this race, mainly at the front end, to the front corner and the front floor endplate. They have added an extra vane to the front floor (a relatively thin surface mounted on an axis) to allow better tyre temperature measurement while maintaining similar flow and local load to the current spec. The front corner was updated to help with reliability by reducing the periphery of the elastomeric gaiter, a flexible rubber-like material that covers moving parts on the car. This especially reduces the likelihood of the gaiter tearing mid-race.

## Scuderia Ferrari HP

![Ferrari upgrades](images/2026-austin/image2.png)

![Ferrari upgrades](images/2026-austin/image3.png)

Scuderia Ferrari HP have brought a handful of upgrades to various parts of the car, including the sidepod inlet, floor and diffuser. Most were made with the aim of increasing floor downforce across the whole car while bringing more stability to the rear. They have also reduced the volume of the sidepod inlet for better airflow. The new diffuser is meant to optimise the aerodynamic flow more efficiently.

## Visa Cash App Racing Bulls

![Racing Bulls upgrades](images/2026-austin/image9.png)

Visa Cash App Racing Bulls have brought many changes to their car in their quest to keep 5th in the Constructors' Championship. They have a new front wing endplate for better aerodynamic flow, as well as new flap elements on their rear wing for increased local load distribution. They have also changed the floor board and leading edge to generate more load and, in turn, more downforce. Finally, a new engine cover in the coke region aids airflow, working in tandem with the new floor upgrades.

## Audi Revolut Formula 1 Team

![Audi upgrades](images/2026-austin/image15.png)

![Audi upgrades](images/2026-austin/image14.png)

Audi Revolut Formula 1 Team have brought a new front brake duct and a new floor board to aid aerodynamic efficiency. The brake duct also brings increased cooling. They have also changed the configuration of their mirror stay to complement the updated corner geometry, which improves the overall aerodynamic flow of the car.

## BWT Alpine Formula 1 Team

![Alpine upgrades](images/2026-austin/image11.png)

BWT Alpine Formula 1 Team have redesigned their floor corner and rear wing, both to aid local airflow and local load distribution, which will ultimately improve the car's aerodynamic efficiency. The 2nd and 3rd flaps on the rear wing have been meticulously modified to improve stability as well as overall load delivery.

## Cadillac Formula 1 Team

![Cadillac upgrades](images/2026-austin/image13.png)

Cadillac Formula 1 Team have brought some minor changes to their cars this weekend in Austin. They have upgraded their floor fences, the small vertical fins underneath the car near the front of the floor. This is designed to improve flow conditioning and increase the aerodynamic efficiency of the MAC-26. One of Cadillac's major reliability issues this season has been cooling, and they have taken one more step towards improving their car's cooling characteristics: they have redesigned the cooling louvre to optimise power unit cooling while minimising its effect on the airflow.
`
  }
];
