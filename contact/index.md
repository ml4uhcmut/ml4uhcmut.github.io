---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="nddung@hcmut.edu.vn"
  link="nddung@hcmut.edu.vn"
%}
{%
  include button.html
  type="phone"
  text="(+84) 555 555 555"
  link="(+84) 555 555 555"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/5Kz8LLe7zL92VBW26"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/nddung.png"
  caption="Dr. Nguyen Duc Dung"
%}

{% endcapture %}

<!-- {% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %} -->

{% capture col1 %}
The predecessor was the ML4U group, active since 2020
{% endcapture %}

{% include cols.html col1=col1%}
