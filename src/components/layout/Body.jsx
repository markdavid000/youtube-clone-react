import React from 'react';
import './main.css';
import './query.css';
import Add from './img/add-video.png';
import c1 from './img/channels4_profile (1).jpg';
import c2 from './img/channels4_profile (2).jpg';
import c3 from './img/channels4_profile (3).jpg';
import c4 from './img/channels4_profile (4).jpg';
import c5 from './img/channels4_profile.jpg';
import Clock from './img/clock.png';
import Studio from './img/creator_studio.png';
import DownArrow from './img/down-arrow.png';
import Flag from './img/flag.png';
import History from './img/history.png';
import Home from './img/home.png';
import H1 from './img/hq720 (1).webp';
import H2 from './img/hq720.webp';
import Video from './img/icons8-video-48.png';
import Joystick from './img/joystick.png';
import Library from './img/library.png';
import Like from './img/like.png';
import Menu from './img/menu.png';
import Microphone from './img/microphone.png';
import Music from './img/musical-note.png';
import Newspaper from './img/newspaper.png';
import Notification from './img/notifications-bell.png';
import Question from './img/question.png';
import Settings from './img/settings.png';
import Subscribe from './img/subscribe.png';
import Trending from './img/trending-topic.png';
import Trophy from './img/trophy.png';
import U1 from './img/unnamed (1).jpg';
import U2 from './img/unnamed (2).jpg';
import U3 from './img/unnamed (3).jpg';
import U4 from './img/unnamed.jpg';
import YoutubeKid from './img/youtube_kids.webp';
import YoutubeMusic from './img/Youtube_Music.png';
import YoutubeTv from './img/youtube_tv.png';
import YoutubeShort from './img/youtube-shorts-logo-15253.svg';
import YoutubeWhite from './img/YouTube-White-Full-Color-Logo.wine.png';
import YoutubePng from './img/youtube.png';

const Body = () => {
  const onClick = () => {
    const menu = () => {
      document.querySelector('#menu');
    };

    const sidebar = document.querySelector('.side_bar');

    menu(sidebar.classList.toggle('show_sidebar'));
  };

  return (
    <body className='body'>
      <nav>
        <div className='grid'>
          <div className='__grid-one'>
            <button className='menu_bar_link' onClick={onClick}>
              <img
                id='menu'
                src={Menu}
                className='menu_bar'
                alt=''
                width='46'
              />
            </button>
            <div>
              <a href='#!'>
                <img
                  src={YoutubeWhite}
                  className='youtube_logo'
                  alt=''
                  width='130'
                />
              </a>
            </div>
          </div>
          <div className='__grid-two'>
            <div>
              <input type='text' placeholder='Search' className='search_bar' />
              <button className='search_bar_btn' type='button'>
                <ion-icon
                  name='search-outline'
                  className='search_bar_btn_icon'
                ></ion-icon>
              </button>

              <button className='voice_search_btn' type='button'>
                <img
                  src={Microphone}
                  className='voice_search_btn_icon'
                  alt=''
                  width='20'
                />
              </button>
            </div>
          </div>

          <div className='__grid-three'>
            <button className='create_video_btn' type='button'>
              <img
                src={Add}
                className='create_video_btn_icon'
                alt=''
                width='20'
              />
            </button>
            <button className='notification_btn' type='button'>
              <img
                src={Notification}
                className='notification_btn_icon'
                alt=''
                width='20'
              />
            </button>
            <button className='user_menu_btn' type='button'>
              <img
                src='https://yt3.ggpht.com/-Y8vlGDf8pQVH_hVXtg4wUxfAdMzCiAdR7MaY9HWzru8Kw71RKPPU-gHKB0ayXdmpkOcsm6M=s88-c-k-c0x00ffffff-no-rj-mo'
                alt=''
              />
            </button>
          </div>
        </div>
      </nav>
      <section>
        <div className='side_bar'>
          <a href='#!' className='display_flex active'>
            <img src={Home} alt='' width='20' />
            <span className='style'>Home</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={YoutubeShort} alt='' width='20' />
            <span className='style'>Shorts</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Subscribe} alt='' width='20' />
            <span className='style'>Subscriptions</span>
          </a>
          <div className='border'></div>
          <a href='#!' className='display_flex'>
            <img src={Library} alt='' width='20' />
            <span className='style'>Library</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={History} alt='' width='20' />
            <span className='style'>History</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Video} alt='' width='20' />
            <span className='style'>Your Videos</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Clock} alt='' width='20' />
            <span className='style'>Watch Later</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Like} alt='' width='20' />
            <span className='style'>Liked Videos</span>
          </a>
          <div className='border'></div>
          <div className='sec_heading'>Subscriptions</div>
          <a href='#!' className='display_flex'>
            <img src={U4} alt='' width='20' className='rounded' />
            <span className='style'>Seth Fowler</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={c5} alt='' width='20' className='rounded' />
            <span className='style'>Oga Sabinus</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={c1} alt='' width='20' className='rounded' />
            <span className='style'>Money Flow Aca...</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={c2} alt='' width='20' className='rounded' />
            <span className='style'>N Recap Love &...</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={U1} alt='' width='20' className='rounded' />
            <span className='style'>De General</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={c3} alt='' width='20' className='rounded' />
            <span className='style'>Babarex TV</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={c4} alt='' width='20' className='rounded' />
            <span className='style'>JAX</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={U2} alt='' width='20' className='rounded' />
            <span className='style'>Brat TV</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={DownArrow} alt='' width='20' className='rounded' />
            <span className='style'>Show 39 More</span>
          </a>
          <div className='border'></div>
          <div className='sec_heading'>Explore</div>
          <a href='#!' className='display_flex'>
            <img src={Trending} alt='' width='20' />
            <span className='style'>Trending</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Music} alt='' width='20' />
            <span className='style'>Music</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Joystick} alt='' width='20' />
            <span className='style'>Gaming</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Newspaper} alt='' width='20' />
            <span className='style'>News</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Trophy} alt='' width='20' />
            <span className='style'>Sports</span>
          </a>
          <div className='border'></div>
          <div className='sec_heading'>More from YouTube</div>
          <a href='#!' className='display_flex'>
            <img src={YoutubePng} alt='' width='20' />
            <span className='style'>YouTube Premium</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Studio} alt='' width='20' />
            <span className='style'>Creator Studio</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={YoutubeMusic} alt='' width='20' />
            <span className='style'>YouTube Music</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={YoutubeKid} alt='' width='25' />
            <span className='style'>YouTube Music</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={YoutubeTv} alt='' width='20' />
            <span className='style'>YouTube TV</span>
          </a>
          <div className='border'></div>
          <a href='#!' className='display_flex'>
            <img src={Settings} alt='' width='20' />
            <span className='style'>Settings</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Flag} alt='' width='20' />
            <span className='style'>Report history</span>
          </a>
          <a href='#!' className='display_flex'>
            <img src={Question} alt='' width='20' />
            <span className='style'>Help</span>
          </a>
          <a href='#!' className='display_flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z'
                fill='rgba(255,255,255,1)'
              />
            </svg>
            <span className='style'>Send feedback</span>
          </a>
          <div className='border'></div>
          <div>
            <a href='#!' className='footer_link_style'>
              About
            </a>
            <a href='#!' className='footer_link_style'>
              Press
            </a>
            <a href='#!' className='footer_link_style'>
              Copyright
            </a>
            <a href='#!' className='footer_link_style'>
              Contact us
            </a>
            <a href='#!' className='footer_link_style'>
              Creator
            </a>
            <a href='#!' className='footer_link_style'>
              Advertise
            </a>
            <a href='#!' className='footer_link_style'>
              Developers
            </a>
          </div>
          <div>
            <a href='#!' className='footer_link_style'>
              Terms
            </a>
            <a href='#!' className='footer_link_style'>
              Privacy
            </a>
            <a href='#!' className='footer_link_style'>
              Policy & Safety
            </a>
            <a href='#!' className='footer_link_style'>
              How Youtube works
            </a>
            <a href='#!' className='footer_link_style'>
              Test new features
            </a>
          </div>
          <div className='footer_text_style'>&copy 2023 Google LLC</div>
        </div>
        <div className='body_content_two'>
          <div className='body_content_two_links'>
            <button className='body_content_two_link'>All</button>
            <button className='body_content_two_link active'>
              Computer Programming
            </button>
            <button className='body_content_two_link'>Mixes</button>
            <button className='body_content_two_link'>Music</button>
            <button className='body_content_two_link'>Poltergeists</button>
            <button className='body_content_two_link'>Inventions</button>
            <button className='body_content_two_link'>Website</button>
            <button className='body_content_two_link'>Trainers</button>
            <button className='body_content_two_link'>Comedy</button>
            <button className='body_content_two_link'>CSS</button>
            <button className='body_content_two_link'>Gadgets</button>
            <button className='body_content_two_link'>Superhero movies</button>
            <button className='body_content_two_link'>Smart phones</button>
            <button className='body_content_two_link'>Machines</button>
            <button className='body_content_two_link'>Nollywood</button>
            <button className='body_content_two_link'>Bitcoin</button>
            <button className='body_content_two_link'>Live</button>
            <button className='body_content_two_link'>Computers</button>
            <button className='body_content_two_link'>Recently uploaded</button>
            <button className='body_content_two_link'>Watched</button>
            <button className='body_content_two_link'>New to you</button>
          </div>
        </div>

        <div className='video_body'>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img src={H1} alt='' className='thumbnail' />
              <div>44:04</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img src={U3} alt='' className='channel_icon' />
                <div>
                  <div className='title'>
                    Reflective Tokens | Safemoon Contract Explained | Part 1
                  </div>
                  <button className='channel_name'>Casweeney Ojukwu</button>
                  <div className='views_pre_day'>
                    93 views &CenterDot; 2 weeks ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6_yMDiHNpn8Un5iooBQ4rC6TCVQ'
                alt=''
                className='thumbnail'
              />
              <div>6:43:22</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/ytc/AMLnZu-9Pac4v1guR3I9xpCsppVJOPZ9NviIVNW7pJk9=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Fully Functional YouTube Clone | React | Redux | Firebase...
                  </div>
                  <button className='channel_name'>Backbench Coder</button>
                  <div className='views_pre_day'>
                    {' '}
                    47K views &CenterDot; 1 year ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/F627pKNUCVQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9i2vDWU7GH4DDMSQuK6G0pyp_Eg'
                alt=''
                className='thumbnail'
              />
              <div>9:44:47</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Build and Deploy 4 Modern React Apps and Get Hired as a
                    Front...
                  </div>
                  <button className='channel_name'>
                    JavaScript Mastery{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    285K views &CenterDot; 1 month ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/u6gSSpfsoOQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlIxGqz7fm47CucvyIfOE3nDVWKA'
                alt=''
                className='thumbnail'
              />
              <div>8:26:03</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    React JavaScript Framework for Beginners &dash;&dash;
                    Project-Based...
                  </div>
                  <button className='channel_name'>
                    freeCodeCamp.org{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    283K views &CenterDot; 4 months ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/0KmUoTfGa34/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp4njWl-WlU3rm4e7_PJSpbZfXVQ'
                alt=''
                className='thumbnail'
              />
              <div>14:22</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/ytc/AMLnZu9W2h9scoXcwnKhrhI0qeCL34DXNbamX-rBosaN=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Coding a whole web app ONLY using my Phone
                  </div>
                  <button className='channel_name'>
                    Joma Tech{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    3.4M views &CenterDot; 2 years ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/WKOkCpMZ3Z0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDY_6QWQNMzeTOMDOkZto7Vjm8yzQ'
                alt=''
                className='thumbnail'
              />
              <div>12:01</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    What you didn't know about YouTube
                  </div>
                  <button className='channel_name'>
                    Mrwhosetheboss{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    4.2M views &CenterDot; 4 weeks ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/TYEqV7nLDRQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvhcVLEeS1NYZG5J1tRIpj9lTlyA'
                alt=''
                className='thumbnail'
              />
              <div>5:24</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/ytc/AMLnZu89ScXyupF9lJPMxb9d4PXcA90FI64Tp0G7nC1sWw=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Top CSS and JavaScript Animation & Hover Effects...
                  </div>
                  <button className='channel_name'>
                    Online Tutorials{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    104K views &CenterDot; 2 years ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/D8B1w8jxKuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3NV8OcTRUq5MfQt4SFa3ZfjtJ4A'
                alt=''
                className='thumbnail'
              />
              <div>5:23</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/DRxV_Mnlp-kq6bIRWg11gqS5eqBuGmiHG8SVdx7JLM1hEYUCjo9iIklgDa2FR8xFqVvO6JegaQ=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    How to Learn frontend development in 2023 | Part 1 - HTML $
                    CSS
                  </div>
                  <button className='channel_name'>Dev Shekhawat</button>
                  <div className='views_pre_day'>
                    1.1K views &CenterDot; 7 days ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/Wn_Kb3MR_cU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi84XDLApmUMJhtH0ZmSx1FN43eA'
                alt=''
                className='thumbnail'
              />
              <div>3:13:48</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Build and Deploy a Modern Web 3.0 Blockchain App |
                    Solidity...
                  </div>
                  <button className='channel_name'>
                    JavaScript Mastery{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    1.7M views &CenterDot; 1 year ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/peMDeWcTLZ8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXelXPymlCEvVZGSuuSS22u8S9hw'
                alt=''
                className='thumbnail'
              />
              <div>1:58:22</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img src={U3} alt='' className='channel_icon' />
                <div>
                  <div className='title'>
                    Uniswap Smart Contract Explained Part 2 UniswapV2Pair
                    Smart...
                  </div>
                  <button className='channel_name'>Casweeney Ojukwu</button>
                  <div className='views_pre_day'>
                    103 views &CenterDot; 9 days ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/_oO4Qi5aVZs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLM28VZtSgQ7LH8OZKIEOEYn4qCg'
                alt=''
                className='thumbnail'
              />
              <div>2:17:37</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Build and Deploy a Fully Responsive Website with Modern
                    UI/UX in React
                  </div>
                  <button className='channel_name'>
                    JavaScript Mastery{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    387K views &CenterDot; 6 months ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/Q6YUEqnOgIg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOHPoTEAw0oAnuXkswfjqjA9-48w'
                alt=''
                className='thumbnail'
              />
              <div>14:01</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/SZDSSBxcuZPWay3WyQOV1uBnAsRQ4_MlpomNMdnU8BCudpaiyMDFs2VeUqzgson0Uzb1biGMlKg=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Magic Navigator Menu Indicator using HTML CSS and JavaScript
                    |...
                  </div>
                  <button className='channel_name'>Codehal</button>
                  <div className='views_pre_day'>
                    554 views &CenterDot; 1 month ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/Dett4dw_IpI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8l1T_aZEPABtmAKc_wMbzDIJ3yA'
                alt=''
                className='thumbnail'
              />
              <div>10:55</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img src={H2} alt='' className='channel_icon' />
                <div>
                  <div className='title'>
                    How to become FULL STACK WEB DEVELOPER in 2023 | Complete...
                  </div>
                  <button className='channel_name'>Devgrammer</button>
                  <div className='views_pre_day'>
                    729 views &CenterDot; 10 days ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/4097PpxL3AA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf2qE8OwOsrck-HhHsbvoKYd5q4w'
                alt=''
                className='thumbnail'
              />
              <div>57:48</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/SYe4TpX0ygqZQD2sxvQuh4kEOGrX_FsjU72hAu_pVe0OsXAkjYP0xUHOP18wYJNZ1owLEAaIvg=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Responsive Admin Dashboard using HTML & CSS
                  </div>
                  <button className='channel_name'>Ime Creative</button>
                  <div className='views_pre_day'>
                    1.7K views &CenterDot; 10 months ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/2FeymQoKvrk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeJhKRKMnqtQv6cOGq4DSYFmnJQg'
                alt=''
                className='thumbnail'
              />
              <div>1:01:47</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    Build and Deploy Your Own ChatGPT AI App in JavaScript |
                    OpenAI,
                  </div>
                  <button className='channel_name'>
                    JavaScript Mastery{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    211K views &CenterDot; 2 weeks ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
          <a href='#!' className='video'>
            <div className='img_box'>
              <img
                src='https://i.ytimg.com/vi/UtMMjXOlRQc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2NizNLQj4dqEZ8vCMUf2znUa2AQ'
                alt=''
                className='thumbnail'
              />
              <div>25:18</div>
            </div>
            <div className='content'>
              <div className='details'>
                <img
                  src='https://yt3.ggpht.com/ytc/AMLnZu_fG-i4GM3kKAMH6sVHs_dwObZVgPmvTcr7njfiTw=s68-c-k-c0x00ffffff-no-rj'
                  alt=''
                  className='channel_icon'
                />
                <div>
                  <div className='title'>
                    i created malware with Python (it's SCARY easy!!)
                  </div>
                  <button className='channel_name'>
                    NetworkChuck{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='16'
                      height='16'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z'
                        fill='rgba(151,151,151,1)'
                      />
                    </svg>
                  </button>
                  <div className='views_pre_day'>
                    1.3M views &CenterDot; 7 months ago
                  </div>
                </div>
                <button className='more_btn'>
                  <i className='ri-more-2-line more_btn_icon'></i>
                </button>
              </div>
            </div>
          </a>
        </div>
      </section>
    </body>
  );
};

export default Body;
