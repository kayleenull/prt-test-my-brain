/* 

Configuration file for PRT task -- Instructions

This file has four sections.

SECTION 1 contains parameter settings, such as duration of events, keys to use, and reward amounts.
A comment describes what each parameter does. It is important that each parameter value be followed
by a comma, or else a syntax error will occur (except for the final parameter).

SECTION 2 is a list of all the images used by the experiment. The path to these files should be relative
to the location of the index.html file. This list is used to preload the images at the start of 
the experiment.

SECTION 3 is a list of practice trials. Each trial has four parameters (block, trial, stimulus, rewarded),
though only stimulus is used in the practice trials. The other values must exist, with the value of null.

SECTION 4 is a list of the test trials in the order that they will be presented. The block variable
controls when breaks appear in the task; all trials with the same block value are presented together.
The trial variable is just an index of the trial number. The stimulus variable controls which image is
displayed. The rewarded variable controls whether the stimulus will be rewarded (0 = no reward, 1 = reward)

*/

// SECTION 1 //
var CONFIG = {
  FIXATION_DURATION: 500, // ms (how long to show the fixation cross)
  STIMULUS_DURATION: 375, // ms (how long to show the stimulus for classification)
  TRIAL_DURATION: 5000, // ms, (maximum duration to wait for a response before continuing; or set to null to wait for a response indefinitely)
  FEEDBACK_DURATION: 1500, // ms (how long to show the feedback when it appears)
  // RESPONSE_DISPLAY_DURATION: 1000, // ms (how long to show the image corresponding to the response that the subject made) (not used currently)
  LEFT_KEY: 's', // use lowercase
  RIGHT_KEY: 'l', // use lowercase
  LEFT_SHAPE: 'cats', // use plural form
  RIGHT_SHAPE: 'dogs', // use plural form
  BIAS_SHAPE: 'cats', // this is only for the purpose of recording in the data. actual bias is determined by the trial variables in SECTION 4.
  LEFT_EXAMPLE: 'img/7S_10C_yellow3.jpg', // for instructions page, example shown on the left side for left key
  RIGHT_EXAMPLE: 'img/7C_10S_yellow3.jpg', // for instructions page, example shown on the right side for right key
  LEFT_SINGLE_EXAMPLE: 'img/yellow_circle.jpeg', // for instructions, a single example of the shape
  RIGHT_SINGLE_EXAMPLE: 'img/yellow_square.jpeg', // for instructions, a single example of the shape
  LEFT_PREFIX: '7S_10C', // the part of the image filename that identifies that there are more LEFT_SHAPE than RIGHT_SHAPE
  RIGHT_PREFIX: '7C_10S', // the part of the image filename that identifies that there are more RIGHT_SHAPE than LEFT_SHAPE
  IMAGE_SIZE: 600, // pixels
  ESTIMATED_TOTAL_DURATION: 15, // minutes
  TOTAL_BLOCKS: 3, // make sure this matches the numbers assigned in the stimulus info below
  BREAK_LENGTH: 10000, // ms length of break between blocks
  REWARD_AMOUNT: 5, // cents; set to null if no monetary reward
  TOTAL_REWARD: 6.00, // dollars
  PLAY_REWARD_AUDIO: true,
  REWARD_IMAGE: 'img/reward.gif', // the image to show on a reward trial
  REWARD_SOUND: 'mp3/reward-coin-drop.mp3', // path to file (use mp3 if possible for browser compatibility), set to null if no sound
  SHOW_ACCURACY_AT_END: false, // show "you responded correctly on X of N trials" at the end screen?
  SAVE_DATA_TYPE: 'cognition', // How data should be saved. Current options are 'tmb' for TestMyBrain, 'cognition' for cognition.run, and 'local' for downloading a CSV file.
  ID_MESSAGE: 'Please enter your task ID from the survey tab in the text box below. (Do not enter your worker ID):'
}

// SECTION 2 //
CONFIG.IMAGE_LIST = [
  'img/7C_10S_yellow3.jpg',
  'img/7C_10S_yellow4.jpg',
  'img/7C_10S_yellow5.jpg',
  'img/7C_10S_yellow6.jpg',
  'img/7C_10S_yellow7.jpg',
  'img/7C_10S_yellow8.jpg',
  'img/7C_10S_yellow9.jpg',
  'img/7C_10S_yellow10.jpg',
  'img/7S_10C_yellow3.jpg',
  'img/7S_10C_yellow4.jpg',
  'img/7S_10C_yellow5.jpg',
  'img/7S_10C_yellow6.jpg',
  'img/7S_10C_yellow7.jpg',
  'img/7S_10C_yellow8.jpg',
  'img/7S_10C_yellow9.jpg',
  'img/7S_10C_yellow10.jpg',
  'img/reward.gif',
  'img/yellow_circle.jpeg',
  'img/yellow_square.jpeg'
]

// SECTION 3 //
// note that practice trials will be shown in a random order
CONFIG.PRACTICE_TRIALS = [
  {block: null, trial: null, stimulus: 'img/7C_10S_yellow3.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7C_10S_yellow4.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7C_10S_yellow5.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7C_10S_yellow6.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7S_10C_yellow3.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7S_10C_yellow4.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7S_10C_yellow5.jpg', rewarded: null},
  {block: null, trial: null, stimulus: 'img/7S_10C_yellow6.jpg', rewarded: null}
]

// SECTION 4 //
CONFIG.TRIAL_INFO = [
  { block: 1, trial: 1, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 2, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 3, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 4, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 5, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 6, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 7, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 8, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 9, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 10, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 1, trial: 11, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 12, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 13, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 14, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 1, trial: 15, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 16, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 17, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 18, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 19, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 1, trial: 20, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 21, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 1, trial: 22, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 23, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 1, trial: 24, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 1, trial: 25, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 26, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 27, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 28, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 29, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 1, trial: 30, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 31, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 32, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 33, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 1, trial: 34, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 35, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 36, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 1 },
  { block: 1, trial: 37, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 38, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 39, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 1, trial: 40, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 41, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 1, trial: 42, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 43, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 44, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 45, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 46, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 47, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 48, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 1, trial: 49, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 50, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 1, trial: 51, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 1, trial: 52, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 53, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 54, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 55, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 56, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 57, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 58, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 59, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 60, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 61, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 62, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 63, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 64, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 65, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 1, trial: 66, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 67, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 68, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 69, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 70, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 1, trial: 71, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 72, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 73, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 1 },
  { block: 1, trial: 74, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 1, trial: 75, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 76, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 77, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 78, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 79, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 80, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 81, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 82, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 83, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 1, trial: 84, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 85, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 86, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 1, trial: 87, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 88, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 1 },
  { block: 1, trial: 89, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 90, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 1, trial: 91, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 92, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 93, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 1, trial: 94, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 1, trial: 95, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 1, trial: 96, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 1, trial: 97, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 1, trial: 98, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 1, trial: 99, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 1, trial: 100, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 2, trial: 1, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 2, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 3, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 4, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 5, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 6, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 7, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 8, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 2, trial: 9, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 10, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 2, trial: 11, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 12, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 13, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 14, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 15, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 16, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 17, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 18, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 19, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 20, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 2, trial: 21, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 22, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 23, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 24, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 25, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 26, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 27, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 28, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 29, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 30, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 31, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 2, trial: 32, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 33, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 34, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 35, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 36, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 37, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 38, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 39, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 40, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 41, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 42, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 43, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 44, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 45, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 46, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 47, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 48, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 2, trial: 49, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 50, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 51, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 52, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 2, trial: 53, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 54, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 55, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 56, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 57, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 58, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 59, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 60, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 61, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 62, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 63, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 2, trial: 64, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 65, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 1 },
  { block: 2, trial: 66, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 1 },
  { block: 2, trial: 67, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 68, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 69, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 70, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 71, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 72, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 73, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 74, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 75, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 76, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 77, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 78, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 79, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 2, trial: 80, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 2, trial: 81, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 82, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 2, trial: 83, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 2, trial: 84, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 85, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 86, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 2, trial: 87, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 2, trial: 88, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 89, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 90, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 91, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 2, trial: 92, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 93, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 2, trial: 94, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 2, trial: 95, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 2, trial: 96, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 2, trial: 97, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 98, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 2, trial: 99, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 2, trial: 100, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 1, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 2, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 1 },
  { block: 3, trial: 3, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 4, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 5, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 6, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 7, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 8, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 9, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 10, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 11, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 12, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 13, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 14, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 15, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 16, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 17, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 18, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 19, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 20, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 21, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 22, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 23, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 24, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 25, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 26, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 27, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 28, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 29, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 3, trial: 30, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 31, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 32, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 33, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 34, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 35, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 3, trial: 36, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 37, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 38, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 39, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 40, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 41, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 42, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 43, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 44, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 45, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 46, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 47, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 48, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 49, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 1 },
  { block: 3, trial: 50, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 3, trial: 51, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 52, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 53, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 54, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 55, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 56, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 57, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 58, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 3, trial: 59, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 3, trial: 60, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 61, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 62, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 63, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 64, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 65, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 66, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 67, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 68, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 69, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 70, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 71, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 0 },
  { block: 3, trial: 72, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 73, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 74, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 75, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 76, stimulus: "img/7C_10S_yellow7.jpg", rewarded: 0 },
  { block: 3, trial: 77, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 1 },
  { block: 3, trial: 78, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 79, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 80, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 81, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 1 },
  { block: 3, trial: 82, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 3, trial: 83, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 84, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 85, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0 },
  { block: 3, trial: 86, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 3, trial: 87, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 88, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 1 },
  { block: 3, trial: 89, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 90, stimulus: "img/7S_10C_yellow6.jpg", rewarded: 1 },
  { block: 3, trial: 91, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 0 },
  { block: 3, trial: 92, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 93, stimulus: "img/7C_10S_yellow6.jpg", rewarded: 0 },
  { block: 3, trial: 94, stimulus: "img/7C_10S_yellow9.jpg", rewarded: 0 },
  { block: 3, trial: 95, stimulus: "img/7C_10S_yellow8.jpg", rewarded: 1 },
  { block: 3, trial: 96, stimulus: "img/7S_10C_yellow4.jpg", rewarded: 1 },
  { block: 3, trial: 97, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 98, stimulus: "img/7S_10C_yellow5.jpg", rewarded: 0 },
  { block: 3, trial: 99, stimulus: "img/7C_10S_yellow10.jpg", rewarded: 0 },
  { block: 3, trial: 100, stimulus: "img/7S_10C_yellow3.jpg", rewarded: 0  }
 ]