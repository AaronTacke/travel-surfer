![Travel Surfer - Online on rails](https://raw.githubusercontent.com/AaronTacke/travel-surfer/main/assets/header.png)

## :star2: Quick start :star2:

Just follow the simple steps for [Installing Expo](https://docs.expo.dev/get-started/installation/).

Start the application for iOS/Android using
```
npx expo start
```

![App Overview](https://github.com/AaronTacke/travel-surfer/raw/main/travel-surfer-overview.png)

## Inspiration

The inspiration for this project came quite naturally - on our way to hackaTUM, we were chatting on WhatsApp about our ETAs and where we would meet, and of course this happened while some team members were in U-Bahn. When Aaron’s Internet dropped, and he couldn’t send any responses, it was infuriating, because if had he sent the message earlier, we could have arranged meeting up earlier. 

And it was even more infuriating, because it reminded us of all the many failed down- and upload attempts in the last years of studying at TUM.


## What it does

The app is simple to use - it asks the user for his current station and his destination stop in the Munich public transport network (easily extensible for long distance travel or other cities) and shows the expected mobile data coverage on the given route. Users have the option to either look at the possible timeframes in which they can do different activities on their phone (for example live streaming), or to check out how big of a file they can download on which part of their way.

## How we built it
Using "Open Data Munich" we gathered information about the public transportation network in general.

Then, we collected real data about network quality all the way across a U-Bahn ride.
After that we used polynomial regression functions to process the data, getting rid of outliers and with this we inferred the general pattern of network connectivity across a ride.

We introduced and implemented simple but meaningful use cases to base our UI/UX design on.
Finally, we coded the app using React Native and deployed it our our mobile phones with expo.io

## Challenges we ran into

A simpler question would be - what challenges didn’t we run into? :D

First of all, speed tests take up a lot of mobile data. We had to choose a fitting polling rate so that we don’t use up all of our monthly plans within a few minutes. We found that taking a measurement every 10 seconds (with 20MB of downloaded data each) gave us a good overview of the connectivity while not absolutely eating up our monthly allowance of mobil data.

The speed test results, by their nature, are not that consistent on a moving vehicle due to the always changing base stations, infrastructure and of course the fact that the U-Bahn is underground. A big challenge was to find a way to interpret the data we acquired in a meaningful way, finding the general pattern of the connection reliability. 

And we also had a limited amount of data we could collect and work with, since getting the measurements took up a lot of resources (our monthly data plan) and we were heavily limited by time constraints.

## Accomplishments that we're proud of

We had a version of the app running our phones within the first hours. 
On our way back homes way past midnight on Saturday, we tested out the app in the U6, and the network did actually drop when the app predicted it would! It was the first time we were happy that our internet _disappeared_.

For the first time, we have created an app that (at least) we will use on a daily basis!

## What we learned

How hard building a simple but detailed UI/UX is.

How far we have come in terms of mobile connectivity.

How there is a Ballmer Peak for Spezi.

## What's next for Travel Surfer?

This functionality would be perfect to integrate within another transportation app, such as MVG Fahrinfo or Google/Apple maps. This would get rid of the hassle of entering the route again, and having to know which exact stop the user needs to start and end the route. Google maps and MVG Fahrinfo, for example, already show information about the expected occupancy during the ride. So adding a point about network connectivity wouldn’t be a far stretch!