---
title: "Drop Foot Gait Simulation"
date: "2019-12-01"
blurb: "Generating a simulated drop foot gait with evolutionary algorithm"
category: "project"
picture: "../images/biomechanics-walker.png"
---

For 16-868 Biomechanics & Motor Control, my team and I investigated simulated gait of a two-legged walker in MATLAB's Simulink. Our goal was to apply a drop foot injury to the model and generate a simulated gait that aligns with how drop foot gait presents in the real world. To this end, we started with a 2D muscular reflex model produced by Geyer and Herr in 2010, and gave it drop foot by reducing the maximum isometric force of its tibialis anterior to 33% of the healthy value. A covariance matrix adaptation evolutionary strategy (CMA-ES) was then employed to find a new set of control parameters that would allow the model to walk continuously.

A full writeup of the methods and results <a href="/biomechanics-report.pdf" style="color:blue;">can be found here</a>.

#### Gait of the healthy starting model can be seen in the following video:
<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/jb5guOVHsGM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


#### Gait of our optimized drop-foot model can be seen in the following video:
<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/Uux9MA3y10k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>