---
title: Light-weight Approach for Super Resolution
author: Duc Phuc Nguyen, Khanh Hung Vu, Duc Dung Nguyen, Hoang-Anh Pham
image: images/projects/IEEEAccess-F2SRGAN.png
links: ieeexplore.ieee.org/document/10077589
date: "2024-12-16"
#  github: github.com/signofthefour
group: normal
tag:
  - resource
---

<!-- excerpt start -->

This project aims to build a lightweight Super Resolution model that can be deployed on the embedded systems while still yield high quality reconstruction results.

<!-- excerpt end -->

With the successful development of deep learning, single image super-resolution (SISR) has advanced significantly in recent years. However, in practice, excessive convolutions limit super-resolution applications on platforms with limited resources like mobile devices or embedded systems. Besides, existing lightweight models have a problem with small receptive fields and only consider local features for the reconstruction. Previous models try to stack more convolutions layers to address this problem, but this prolongs the execution time due to increasing the number of parameters. Therefore, this paper proposes a novel approach named F2SRGAN using a revised Fast Fourier Convolution to enlarge the receptive field, enabling this model to learn global features better, neither introducing too many parameters nor prolonging the model inference time. The experimental results show that our proposed F2SRGAN significantly improves perceptual image quality among the lightweight SISR methods while maintaining an acceptable inference time.
