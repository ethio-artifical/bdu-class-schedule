# BDU Class Schedule Website

A responsive front-end prototype built with plain HTML, CSS, and JavaScript.

## Run it
1. Extract the ZIP file.
2. Open `index.html` in a browser. No build tools or server are required.
3. For local development, you can also run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Features
- Filter by student group, instructor, and day.
- Switch between course cards and a table view.
- Browse weekdays using quick tabs.
- Find free periods for a group, instructor, or room.
- Navigate the calendar by month.
- Responsive layout for desktop, tablet, and mobile.

## Schedule data notes
Course information was transcribed from the supplied “Class Schedule for 2019 AY 1st semester for Stat and DS” PDF. The source includes a few ambiguous or incomplete cells and missing room details; those are marked as `Not specified` where needed. The free-time finder is based only on the entries included in this prototype, so verify availability with the department before making decisions. The calendar is a separate visual component and does not represent official academic dates.
