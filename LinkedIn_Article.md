I Built a Working App in 6 Hours. I'm a Product Manager Who Can't Code.

Last month, I went to Hot Springs, AR. Any motor enthusiasts out there would know Arkansas has some sharp turns and scenic routes for fun driving. Earlier I would map this route manually, but instead I thought I would give AI a try — build an app that helps riders find the most scenic, twisty roads between two destinations. Not the fastest route. The most fun one.

I'm a PM. I can write a PRD and argue about prioritization frameworks all day. But I can't write production code.

Six hours later, I had a working prototype. Geocoding, route optimization, curvature scoring algorithms, interactive maps, dark-themed UI. Built entirely with AI.

Here's what I learned.


What AI Got Right

Speed of exploration was the biggest win. When the algorithm picked up urban streets in Dallas as "twisty roads," I described the problem in plain English and had a fix in minutes. Three iterations of the core algorithm — each would have been a separate ticket in a traditional sprint — happened in the same sitting.

Domain knowledge on demand was transformative. I didn't know circumradius algorithms existed. I didn't know about Overpass API for querying OpenStreetMap data. The AI brought deep technical knowledge and translated it into working code that matched my product requirements. As a PM, AI lets you be the bridge between your own ideas and a working prototype.

The UI surprised me. Dark theme with orange accents, linked sliders, status bar showing pipeline progress — all from my rough description. Not pixel-perfect, but good enough to demo without embarrassment.


Where AI Fell Short

And here's the part most AI-enthusiasm articles skip.

Performance is a real issue. The app takes 45 seconds to 2 minutes to generate a route. When I asked AI to optimize, things got interesting — and not in a good way. It proposed three optimizations that individually made sense but together degraded results. Tighter search areas excluded good roads. Aggressive filtering cut candidates too early. We reverted two of three changes.

AI is great at generating plausible optimizations but struggles to predict second-order effects. It can make each piece faster while making the whole thing worse.

Optimization without judgment. When I asked about caching tradeoffs, AI calculated storage math correctly but couldn't tell me whether the tradeoff was worth it for my use case. It gave me information. It didn't give me judgment. AI can model scenarios, but the PM still needs to make the call.


What This Means for PMs

Prototyping is no longer engineering's bottleneck. What used to take 2-4 weeks took 6 hours. This doesn't replace engineering — this is a prototype, not a product. But instead of writing a 10-page PRD to convince a team to build a proof of concept, you can show up with a working demo.

The PM's role shifts, but doesn't disappear. The AI never once told me I was solving the wrong problem. It never pushed back on a feature that didn't serve the user. Every product decision — the linked sliders, the detour budget model, the 25km urban exclusion zone — came from me. AI executed brilliantly. But judgment about what to build, for whom, and why? Entirely human.

Know when to stop. I spent 2 hours trying to optimize performance and ended up reverting most changes. AI prototypes hit a quality ceiling. Beyond that, you need a real engineer. The PM's job is to recognize where that ceiling is.


The app works. You can enter Dallas, TX and Hot Springs, AR, set your curviness preference, and get a route through the best winding roads in the Ouachita Mountains. It's not production-ready. But as proof that this idea has legs — it's more than sufficient.

A year ago, this would have required two developers and 3 weeks. Today, a PM with a clear vision can build a credible version in an afternoon.

That's not a threat to engineering. It's a superpower for product.

#ProductManagement #AI #Prototyping #BuildInPublic
