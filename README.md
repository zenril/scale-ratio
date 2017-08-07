# scale-ratio
CSS to maintain aspect ratios across multiple width devices
You can maintain elements height based on there widths.

    <div class='s-xs-50 s-sm-70 scale'>
        <div>
            <!-- your content goes here -->
        </div>
    </div>

Use prefixes to define a scale

|Prefix Type                      |s-xs-|s-sm-|s-md-|s-lg-|
|---------------------------------|---------|---------|----------|------------------------|
|Screen sizes | < 768px | > 768px | > 992px  | > 1200px|
| | Phones  | Tablets | Desktops | Large devices Desktops| 


Use a percentage suffix and the prefix `s-*-` this will make the elements height a percentage of the width.


This will Scale the height of the element on small devices/screens to be 10% of the Elements width      
    s-xs-10


The usable percentages range from 5 - 200 in increments of 5

|Classes | Effect |
|------------------------------------------|---------------------------------
|.s-xs-5 .s-sm-5 .s-md-5 .s-lg-5 | height will be 5% of width |
|.s-xs-50 .s-sm-50 .s-md-50 .s-lg-50 | height will be 50% of width |
|.s-xs-155 .s-sm-155 .s-md-155 .s-lg-155 | height will be 155% of width |
|.s-xs-200 .s-sm-200 .s-md-200 .s-lg-200 | height will be 200% of width |

//todo add common 