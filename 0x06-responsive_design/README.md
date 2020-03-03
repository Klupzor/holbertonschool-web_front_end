0x06. Responsive design
=======================

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/4fe027a0c298339cb4cb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200302%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200302T171945Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b9910e104055018cc3b4520dd596ad362473b67c6ddfb4f560586d39c248d758)



Wireframe of the Techium project - mobile version
-------------------------------------------------

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/74a1b9418c04771b2f72.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200302%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200302T171945Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2771010748bf70aabc39e5099faad37c9e2691b30cf06db008aa47db86a5afde)


#### 0\. Fix the hero banner mandatory

Because we did some changes with the `article.html` page in the previous project, our hero banner background is no more visible. Let's fix it!

But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.

In your `01-styles.css` file

-   Inside the `hero-homepage` class selector, update some values:
    -   Property: `background-position`, Value: `65% 8rem`
    -   Property: `background-size`, Value: `90rem auto`
-   Inside the selector that targets `section-inner` class inside `section-hero` class
    -   Update the `min-height` to `35vh`

**Final rendering of the Hero section should look something like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/2/f464d8346c36134ec4ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200302%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200302T171945Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6f85770b4dddaaf7da2ed165e9f07cc5ff72fa1b4150b7efe1e420fd7a2d7b10)
