<?php include 'includes/header.php' ?>
<!-- Banner Section Begin -->
<section class="banner___sec__main inner__banner about_banner">
    <div id="demo" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="assets/images/banners/contact-us.png" class="img-fluid" alt="contact-us">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="banner__content__sec text-center">
                                    <h1>Contact <span>Us</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Banner Section End -->

<!-- Platform Logo Section Begin -->
<?php include 'includes/logoslider.php' ?>

<!-- Platform Logo Section End -->

<!-- Contact Us Section Begin -->
<section class="contact_hme portfolio__sec__main padding__70 pt-1">
    <div class="container">
        <div class="contactWrapper">
            <div class="row no-gutters">
                <div class="col-sm-4">
                    <div class="contact-details d-inline-flex justify-content-center align-items-center flex-column">
                        <div class="heading_footer text-light">
                            <h3 class="mb-2 text-uppercase">Contacts</h3>
                            <h5 class="text-uppercase">Looking for assistance in publishing your book?</h3>
                                <p>Count on our all-inclusive services to transform your manuscript into a published
                                    masterpiece.</p>
                        </div>
                        <div class="footer__info__detail logo_footer_sec mt-4">
                            <ul>
                                <li><span><img src="assets/images/footer-icon1.png" alt="footer-icon"></span><a
                                        href="tel:(718) 766-7420">+(718) 766-7420</a></li>
                                <li><span><img src="assets/images/footer-icon2.png" alt="footer-icon"></span><a
                                        href="mailto:info@authorsbookpublishers.com"><?php $email_1; ?></a>
                                </li>
                                <li><span><img src="assets/images/footer-icon3.png" alt="footer-icon"></span>
                                    <p> <strong>Mailing Address:</strong> 811 Wilshire Blvd, Los Angeles, CA 90017
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <form class="cmxform CrudForm contact_form_Tab contact-form" id="contactForm" method="POST"
                        action="/webpages/FormController.php">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" name="Name" class="form-control" required="" placeholder="Name">
                                <input type="hidden" name="form-name" value="Contact Us Form Query">
                            </div>

                            <div class="col-sm-6">
                                <input type="email" name="Email" class="form-control" required="" placeholder="Email">
                            </div>

                            <div class="col-sm-12">
                                <input id="phone-order" name="Number" rangelength="[7,12]" type="number"
                                    placeholder="Phone Number" required="" class="cta-phone" autocomplete="off">
                            </div>
                            <div class="col-sm-12">
                                <textarea name="Message" class="form-control" placeholder="Message"
                                    required=""></textarea>
                            </div>
                            <div class="col-sm-12 d-flex justify-content-end">
                                <div class="btn_form">
                                    <input type="submit" value="Submit">
                                    <input class="" type="hidden" name="ctry" value="" />
                                    <input type="hidden" name="pc" value="">
                                    <input type="hidden" name="cip" value="">
                                    <input type="hidden" name="hiddencapcha" value="">
                                    <input type="hidden" id="location" name="locationURL"
                                        value="https://authorsbookpublishers.com/" />
                                    <script type="text/javascript">
                                    document.getElementById('location').value = window.location.href;
                                    </script>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="map_sec">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.770262485381!2d-118.25818539999999!3d34.0497638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b3e391ba03%3A0xe2cb7fd77ef49f2d!2s811%20Wilshire%20Blvd%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2s!4v1689096368967!5m2!1sen!2s"
        width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<!-- Contact Us Section End -->



<?php include 'includes/footer.php' ?>