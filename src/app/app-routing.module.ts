import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FlashDealsComponent} from './flash-deals/flash-deals.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {CardOffersComponent} from './card-offers/card-offers.component';
import {RestaurateursComponent} from './restaurateurs/restaurateurs.component';
import {SingleRestaurantComponent} from './single-restaurant/single-restaurant.component';
import {AboutUsComponent} from './footer-pages/about-us/about-us.component';
import {SingleCollectionComponent} from './single-collection/single-collection.component';
import {FlashDealSingleCollectionComponent} from './flash-deal-single-collection/flash-deal-single-collection.component';
import {CustomerProfileComponent} from './customer-profile/customer-profile.component';
import {ExploreAllComponent} from './explore-all/explore-all.component';
import {EmailActivationComponent} from './email-activation/email-activation.component';
import {ViewAllFeaturedCollectionsComponent} from './view-all-featured-collections/view-all-featured-collections.component';
import {BookTableComponent} from './book-table/book-table.component';
import {WhishlistComponent} from './whishlist/whishlist.component';
import {FeaturedSingleCollectionComponent} from './featured-single-collection/featured-single-collection.component';
import {OurStoryComponent} from './our-story/our-story.component';
import {CareersComponent} from './careers/careers.component';
import {ContactComponent} from './contact/contact.component';
import {DownloadAppComponent} from './download-app/download-app.component';
import {TermsConditionsComponent} from './terms-conditions/terms-conditions.component';
import {CancellationsRefundsComponent} from './cancellations-refunds/cancellations-refunds.component';
import {GetStartedComponent} from './get-started/get-started.component';
import {BoostYourRestaurantComponent} from './boost-your-restaurant/boost-your-restaurant.component';
import {GuidelinesComponent} from './guidelines/guidelines.component';
import {CreateAdsComponent} from './create-ads/create-ads.component';
import {BoostOurAdsComponent} from './boost-our-ads/boost-our-ads.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {BookingDetailComponent} from './booking-detail/booking-detail.component';
import {UpdateBookingComponent} from './update-booking/update-booking.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flash-deals',
    component: FlashDealsComponent
  },
  {
    path: 'promotions',
    component: PromotionsComponent
  },
  {
    path: 'card-offers',
    component: CardOffersComponent
  },
  {
    path: 'restaurateurs',
    component: RestaurateursComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'single-collection/:id',
    component: SingleCollectionComponent
  },
  {
    path: 'flash-single-collection/:id',
    component: FlashDealSingleCollectionComponent
  },
  {
    path: 'featured-single-collection/:id',
    component: FeaturedSingleCollectionComponent
  },
  {
    path: 'restaurant/:id',
    component: SingleRestaurantComponent
  },
  {
    path: 'profile',
    component: CustomerProfileComponent
  },
  {
    path: 'explore-all',
    component: ExploreAllComponent
  },
  {
    path: 'activation',
    component: EmailActivationComponent
  },
  {
    path: 'view-all-featured-collections',
    component: ViewAllFeaturedCollectionsComponent
  },
  {
    path: 'book-table/:id',
    component: BookTableComponent
  },
  {
    path: 'book-table',
    component: BookTableComponent
  },
  {
    path: 'wishlist',
    component: WhishlistComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'download-app',
    component: DownloadAppComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'cancellations-refunds',
    component: CancellationsRefundsComponent
  },
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'restaurant-owners',
    component: BoostYourRestaurantComponent
  },
  {
    path: 'bank-credit',
    component: GuidelinesComponent
  },
  {
    path: 'advertisers',
    component: CreateAdsComponent
  },
  {
    path: 'boost-our-ads',
    component: BoostOurAdsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'booking-detail/:id',
    component: BookingDetailComponent
  },
  {
    path: 'update-booking/:id',
    component: UpdateBookingComponent
  },
  {
    path: 'flashdinerpro',
    component: ProductDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

