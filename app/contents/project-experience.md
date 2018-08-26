## `SOLO` **Thesis: Hybrid Rendering Pipeline and Denosing Method**
#### Dallas, TX
##### Jul 2018 – May 2019
** `C++` `Graphics`**
* Based on a deferred rendering pipeline, use ray tracing method to handle the ambient occlusion(AO) and shadow. 
* Learn different frameworks to implement the ray tracer, including DXR, Compute shader, CUDA… 
* Design and implement the framework so that frame data can get collected during the run time for filter training. 
* Apply filters to noisy ray traced buffer, compare and analyze the result.
* Figure 2 is an ***ray-traced real-time AO buffer***. Compared with screen space AO, the result are closer to the ground truth and can better handle the dark corner.

<div class="extra morph-gallary">
  <img src="images/thesis-pipeline.png">
  <img src="images/thesis-rt-ao.png">
</div>
***


## `SOLO` **[Morph Engine](https://github.com/tankiJong/morph-engine)**
#### Dallas, TX
##### August.2017 - Now
** `C++` `General Game Engine`**
* Morph Engine is my personal game engine developed in C++， the ***main feature list is available in the project main page***.
* Adopt many ***modern C++ features*** when I develop the engine to get more experience with the language.
* Build several small game using the engine to learn different aspects of the game engine.
* The ***Asteroid game***(GIF 1) is the first game I made, it's a 2D shooting game with corrective physics.
* The ***Adventure game***(GIF 2) is a tiled based 2D explore game when I learned how to do ***procedure generation*** and use ***Dijkstra Distance*** to do path finding and battle fog. 
* the third figure is a test scene built to test my renderer works correctly for multiple lights.

<div class="extra morph-gallary">
  <img src="images/morph-asteroid.gif">
  <img src="images/morph-adventure.gif">
  <img src="images/morph-muti-lights.jpg">
</div>
***

## `SOLO` **[D3D12 Integration in Morph Engine](https://github.com/tankiJong/morph-engine/tree/dx12/Engine/Graphics)**
#### Dallas, TX
##### May.2018 - August.2018
** `C++` `Rendering`**
* Goal of the project: 
  * learning and understanding how to use ***D3D12***.
  * Trying to write an ***Rendering Hardware Interface layer***(the same terminology to Unreal 4)
* Build The whole architecture by referencing several different engines, including Unreal 4, [Falcor](https://github.com/NVIDIAGameWorks/Falcor) and [MiniEngine](https://github.com/Microsoft/DirectX-Graphics-Samples/tree/master/MiniEngine), and is customized according to my own scenario.

<div class="extra">
  <img src="images/morph-rhi.png" style="width: 100%; max-width: 1200px">
</div>
***


## `TEAM` **[Interstellar Racing League](https://drive.google.com/open?id=1uXqkbx78kKXvq2Hu97vV8oZfQ-9MDRoK)**
#### Dallas, TX
##### Jan.2018 - May.2018
** Tool/Performace Team `Unreal 4` `Optimization`**
* In early milestone, build up project structure and make sure all other team member can have good developing experience.
* Do technical research and implement split screen multiplayer so that we can enable post processing (which is disabled if we use unreal built-in split screen)
* Explore different features in the Unreal engine to build a frame budget and predict the potential game complexity our team can have.
* Focused on the performance, make the game running at 60+ FPS; profile the level and discuss with my team members to optimize the levels to achieve perfect balance between frame rate and gaming experience.
* Author a general [Unreal Performance Guide](https://github.com/tankiJong/tanki-resume/blob/master/source/tanki-zhang-unreal-guide.pdf?raw=true).

<div class="extra">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eR7kYyMBm9I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
***

## `TEAM` **Teddy’s Fluffy Adventure**
#### Dallas, TX
##### August.2017 - September.2017
** Lead Programmer `Unity` `General Gameplay`**
* Teddy’s Fluffy Adventure is a 2-Dimensional physics-based puzzle game that features teddy bear named Teddy that is on a quest to collect his friends and his blanket. This game consists of a easy finger control system that is easy to learn but hard to master, a challenging puzzle that is intriguing for everyone and accessibility to anyone that loves teddy bears and soothing artwork.
* Manipulating the Unity physics system to draw the guide trail, implementing the time freeze mechanic.
* Get good understanding of 2D game physics and math through the project

<div class="extra morph-gallary">
  <img src="images/teddy-jumping.gif"><img src="images/teddy-pillow-placing.gif">
</div>
***

## `SOLO` **[Wireless Sensor Network](https://github.com/tankiJong/visual-network)**
#### Dallas, TX
##### Feb.2017 – May.2017
**Self Course Research `Java` `Algorithm`**
* Random geometric Graph (RGG) is a kind of network, constructed by randomly placing N nodes in some metric space (according to a specified probability distribution) and connecting two nodes by a link if and only if their distance is in a given range.
* Building RGG.
* Coloring nodes according some specific requirement.
* Finding the best backbone of the network.

<div class="extra">
  <img src="https://github.com/tankiJong/visual-network/raw/master/network-showcase.png?raw=true">
</div>
***

## `SOLO` **[Asset Management Demo](https://github.com/tankiJong/asset-managment)**
#### Dallas, TX
##### Jan. 2017
**Self Course Research `C++` `Algorithm`**
* This is a Demo for `SMU Guildhall` Application to better meet the portfolio requirements.
* the detailed description is in the main page of github repo.
* Here is a small showcase video for the project.

<div class="extra">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9KVF6HpxTrU" frameborder="0" allowfullscreen></iframe>
</div>
***

## `TEAM` **DaoVoice**
#### DaoCloud Inc, Shanghai, China
##### Dec.2015 – Dec.2016
**Leader of 5, Frontend Engineer `AngularJS` `RxJs`**
* This is a product of DaoCloud.io. As a frontend engineer, I implemented several big feature and refactored the front end data flow structure.
* I did many different and challenge works. For example, I designed and implemented a `general solution of the data dashboard`, which is consist of several editable cards which will auto re-layout its contents when it is edited. Our developer can create a similar dashboard layout with my code. What’s more, I `redesign the whole data flow of our front end project` to meet the requirement that data is very frequently updated. Utilizing Rx.js, my data flow solution can partly refresh the page with very high performance and also make sure the data is correct. 
![draggable-dashboard](images/daovoice-draggable-dashboard.gif)
***
