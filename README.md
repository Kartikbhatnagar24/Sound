# Introducing VoiceCue 🔷

Forget about listening to long and boring voice recordings and process them manually. 

## About 👀

VoiceCue lets you find sentiments, tags, entities, and actions in your voice recordings instantly.

The app workflow is as simple as uploading your voice recording, selecting which type of analysis to perform and clicking on the generated cues in the list to instantly navigate to its exact position in the voice recording. 

## Features ✨

1. General stats - overview
2. Sentiment analysis
3. Word cloud generation
4. Entity name recognition
5. Activity tracking
6. Voice recognition
7. Interactive transcript
8. Cue word usage
9. Waveform preview
10. Audio controls
11. Drag and drop support
12. Upload both MP3 and WAV
13. Fully responsive
14. Colorful UI

## Tech stack 🛠️

[NextJS](https://nextjs.org) - React application framework

[Deepgram](https://deepgram.com) - for AI based speech recognition

[compromise](https://www.npmjs.com/package/compromise), [sentiment](https://www.npmjs.com/package/sentiment) - for text processing

[react-tagcloud](https://www.npmjs.com/package/react-tagcloud) - to generate word cloud

[react-tabs](https://www.npmjs.com/package/react-tabs) - for navigation panels

[react-drag-drop-files](https://www.npmjs.com/package/react-drag-drop-files) - for drag and drop support

[wavesurfer.js](https://www.npmjs.com/package/wavesurfer.js) - to generate the audio waveform

[GitHub](https://github.com) - to host the code

[Netlify](https://netlify.com) - to deploy the project, serverless functions

[ESLint](https://eslint.org/), [prettier](https://prettier.io/) - for linting and code formatting

[Namecheap](https://namecheap.com) - for custom subdomain (configured on Netlify)

## Licence 📚

VoiceCue is an open source project. The feature requests are welcome.

The project is under the terms of [MIT license](https://choosealicense.com/licenses/mit/).






punctuate=true, add Uppercase and periods for sentences.
diarize=true, adds "speaker": 1
ner=true, adds Named-Entity Recognition (eight two = 82)

Switch between tabs while tha voice recording is playing.

Welcome to VoiceCue, an online application that lets you find sentiments, tags, entities, and actions in your voice recordings instantly.
Currently, you are listening to the demo voice recording for presentation purposes, but feel free to upload your own speech files as well.
VoiceCue was built specifically as an entry for DEV.to and Deepgram hackathon from mid-March to mid-April in 2022. VoiceCue was built with NextJS and is based on Deepgram API, which gives you streamlined access to all Deepgram trained speech recognition models.
I want to say thanks for this amazing opportunity. Building in public is the best way to learn, especially in such supportive communities as DEV.to.
If you want to try the speech recognition yourself, go to the Deepgram website and sign up for 150$ free credit to test out their awesome API yourself.
