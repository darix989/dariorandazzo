---
title: "How I started using Home Assistant"
description: "One requirement: an alarm while I was away. What shipped: a Zigbee network, a homemade NAS, and an apartment that arms itself. Happiest scope creep of my life."
pubDate: 2026-08-24
tags:
  - home-assistant
  - smart-home
draft: false
---

$40 CAD for a door sensor that could beep.

That was the whole feature list. It rang. No app, no history, no notification. If you weren't standing in the apartment, you'd never know anyone had been in it.

I was going to be away for a few weeks that summer, and she wanted some kind of alarm while I was gone. I tried to keep it simple. I really did.

Three off-the-shelf devices, one after the other. Each one stopped just short of what I wanted — a siren delay you couldn't change, a schedule with two slots, alerts you could take all of or none of. Half-assed customization, every time.

So I finally gave in and tried the thing my cousin had been talking about for months: [Home Assistant](https://www.home-assistant.io/). My partner's nerves handed me one of the most satisfying hobbies I've ever had.

I went looking for parts and ran into Zigbee. A Sonoff dongle for about $30 CAD, then AliExpress, which has been my hardware dealer ever since. First haul: Aqara door contact sensors and switches, under $20 CAD each. Still proud of those.

The first regrets showed up just as fast. Wi-Fi devices. Why should turning on the kitchen lights send traffic across the internet? It's a privacy problem, a waste of energy, and it isn't even reliable: they lag, and when the vendor's cloud is having a bad day the switch on my wall does nothing.

Whenever I can I stick to Zigbee — and now Matter over Thread too.

That's when the addiction started: finding new ways to make the apartment smarter, and myself lazier. Living in a condo, though, you need a lot less than you would in a house. The security system doesn't need a wall of cameras. I have one contact sensor and one camera, both on the main door. Nobody is breaking in from a 15th-floor balcony.

Home Assistant finds you reasons to try things anyway. I turned the Raspberry Pi 4 running it into a tiny NAS, just by hanging an HDD I already had off the back. The starter kit was around $130 CAD; the disk cost this hobby nothing. That made me happy for almost a year, until I wanted actual bandwidth and bought a four-bay Terramaster.

So the alarm I ended up with, in the first year, had the following components:

- a local NAS, for snapshots and recordings when the alarm tripped
- smart bulbs, under $20 CAD each — normal light most of the time, alarm-state colors when it mattered
- Aqara switches, under $20 CAD each, almost everywhere
- an Aqara contact sensor on the main door, under $20 CAD
- a Reolink camera pointed at the main door, about $100 CAD
- a smart plug, under $20 CAD, on the camera, so it only powered on with the alarm
- a smart plug, under $20 CAD, on a siren horn, about $30 CAD, so the horn only screamed when something actually fired

The first time it rang, after months of nothing, I was in the office, stuck in a meeting. My phone started buzzing every three seconds. I sat there wondering who the hell was blowing up my WhatsApp.

After the tenth ping I looked. Home Assistant. ALARM TRIGGERED.

First the snapshot: a black shape, and I couldn't tell what I was looking at. Then the ten-second clip the camera had dumped onto the NAS. My heart was going wild while those ten seconds crawled.

Then I saw it. Building management. Jesus.

I opened the live feed anyway, just to be sure. Annual fire inspection. They had told us the week before. I had forgotten, because of course I had. Nice dry run.

My coworkers had been watching my face the whole time. I told them the story at the usual post-meeting coffee.

Arming and disarming automatically was trial and error. Sometimes a time window I had set got in the way. Sometimes the geolocation check just didn't update in time. More times than I like to admit, the horn went off on us three steps inside our own door.

So I hid a disarm on one of the Aqara switches that otherwise only ran the lights. Hitting a switch on the wall is faster than unlocking a phone, opening the app, and tapping disarm — and it has saved the neighbors from a 3am horn more than once.

It wasn't smooth for her either. She swore at me over a double-tap versus a long-press just to get a lighting scene, and she was right, so I simplified it. That's another story.

After a few rounds of that, it settled. It arms when we both leave, it disarms before we're through the door, and weeks go by without either of us touching anything. By then it wasn't only the alarm, either: the lights, the air purifier, the humidifier, all running without us. We stopped fighting it and started just living with it.

My partner almost never opens the app. I spent evenings on that dashboard — laying out the cards, naming every entity properly — and the only person who has ever looked at it is me. That stung a little.

Then it clicked: that is the point. She lives around the automations instead of driving them.

What matters is she feels safer now. Nobody is getting in without the whole neighborhood waking up thirty seconds later.

If your place is small enough that a smart home feels like overkill, it probably is. Do it anyway. Start with one contact sensor on the door you actually use, and count how long you last before the second order.

More of these to come. Happy automating!
