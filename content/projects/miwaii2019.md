---
title: Vietnamese Text-to-Speech System
author: Minh dai ca
image: images/projects/MIWAI19-TTS.png
group: featured
date: "2024-12-16"
tag:
  - resource
---

<!-- excerpt start -->

This project focus on building a TTS system for Vietnamese. Our proposed Adaptive Alignment Tacotron (AAT) model, however, has achieved im- pressive results for a very small dataset of the Vietnamese language.

<!-- excerpt end -->

This project focus on building a TTS system for Vietnamese. Our proposed Adaptive Alignment Tacotron (AAT) model, however, has achieved im- pressive results for a very small dataset of the Vietnamese language. By leveraging the nature of diagonal alignment between phoneme and acoustic sequences, we address the issue with long sequences and the pro- posed model can also be trained efficiently on the small dataset (5 hours of recording). The proposed model consists of the following components - a stacked convolutional encoder, a local diagonal attention module, a decoder with schedule teacher forcing to produce a coarse mel-spectrogram prediction, and a converter to transform the mel-spectrogram to linear-spectrogram. Experimental results show that the proposed model achieves faster convergence speed and higher stability than the baseline model and open a feasible approach for speech synthesis on languages with small dataset.
