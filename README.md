# Tech Stack used:

- Material UI
- Firebase (updates in real time, used to host the data for this app)
  - The videos being shown will be pulled from database in firebase
- CSS (flexbox, snap functionality)
- 3rd party
- UseRef hook - attaching a reference to whatever video the user clicks

## Planning:

- Swipeable Video carousel
  - Video components that display media
  - icons for each video
  - Stop/playable
- Like button counter
- Comment popup component that keeps data of comments
- share button
- Start with skeleton dom elements/css
- then build out components for dynamics

## Components:

- Video
  - media itself
- Video Sidebar
  - like heart, chat, share
- Footer: Spinner disk, footer with audio title

## Cool things I learned:

- scroll-snap-type: y mandatory on both html and on the component class
- display: grid + place-items: center, it will center however the view width

# Using react ticker to create the bottom ticker
