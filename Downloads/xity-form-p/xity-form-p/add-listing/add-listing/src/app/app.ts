import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-upload-media',
  standalone: true,
  template: '<ng-content></ng-content>'
})
export class UploadMediaStubComponent {
  @Output() selectedImg = new EventEmitter<any>();  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TableModule,
    UploadMediaStubComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('add-listing');

  // Template data models and lists
  role: string = '';
  listingdata: any = {};
  country_list: any[] = [];
  state_list: any[] = [];
  city_list: any[] = [];
  pincode_list: any[] = [];
  agents: any[] = [];
  categoryList: any[] = [];
  subCategoryList: any[] = [];
  secondaryCategoryList: any[] = [];
  tertiaryCategoryList: any[] = [];
  productCategory: any[] = [];
  amanetiesArray: any[] = [];
  tagslist: any[] = [];
  service_list: any[] = [];
  categoryValue: any = null;
  secondaryVal: any = null;
  tertiaryVal: any = null;
  customers = [
    { name: 'James Butt', country: 'Algeria', company: 'Benton, John B Jr', representative: 'Ioni Bowcher' },
    { name: 'Josephine Darakjy', country: 'Egypt', company: 'Chanay, Jeffrey A Esq', representative: 'Amy Elsner' },
    { name: 'Art Venere', country: 'Panama', company: 'Chemel, James L Cpa', representative: 'Asiya Javayant' },
    { name: 'Lenna Paprocki', country: 'Slovenia', company: 'Feltz Printing Service', representative: 'Xuxue Feng' },
    { name: 'Donette Foller', country: 'South Africa', company: 'Printing Dimensions', representative: 'Asiya Javayant' },
  ];

  detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      announcement: this.fb.array([this.announcementForm()]),
      is_store: new FormControl(null),
      service_provided: new FormControl(null),
      agent: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      BannerImage: new FormControl(null),
      displayImage: new FormControl(null),
      site_audio: new FormControl(null),
      BannerText: new FormControl(null, Validators.pattern('[a-zA-Z ]*')),
      pincodeForListing: new FormControl(null),
      selectedAmenetiesName: new FormControl(null),
      selectedSpecialitiesName: this.fb.array([this.specialityForm()]),
      selectedLocationTagsName: new FormControl(null),
      selectedServicesTagsName: new FormControl(null),
      selectedProductsTagsName: new FormControl(null),
      selectedBrandTagsName: new FormControl(null),
      Placeimage: new FormControl(null),
      TypeofPlace: new FormControl(null),
      AboutPlace: new FormControl(null),
      featured: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      verified: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      recommended: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      Placedistance: new FormControl(null, Validators.pattern('[0-9]*')),
      review: new FormControl(null),
      Numberofreviews: new FormControl(null),
      relatedCategory: new FormControl(null),
      owner: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      whetheropen: new FormControl(null, Validators.pattern('[a-zA-Z0-9 ]*')),
      viewed: new FormControl(null),
      bookmarks: new FormControl(null),
      Brochure1: new FormControl(null),
      Brochure2: new FormControl(null),
      Brochure3: new FormControl(null),
      team: this.fb.array([this.teamForm()]),
      messages: new FormControl(null),
      appontments: new FormControl(null),
      orders: new FormControl(null),
      slider: this.fb.array([this.sliderForm()]),
      allHighlightedProducts: this.fb.array([this.allHighlightedProductsForm()]),
      CatalogueallHighlightedProducts: new FormControl(null),
      Licenses: this.fb.array([this.LicensesForm()]),
      Awards: this.fb.array([this.AwardsForm()]),
      Certifications: this.fb.array([this.CertificationsForm()]),
      representativeName: new FormControl(null),
      representativeImage: new FormControl(null),
      representativeHostedPlace: new FormControl(null),
      representativeStatus: new FormControl(null),
      representativeCreatedDate: new FormControl(null),
      representativeApprovedDate: new FormControl(null),
      representativeManagedDate: new FormControl(null),
      ContactAddress: this.fb.array([this.ContactAddressForm()]),
      ContactPhone: this.fb.array([this.ContactPhoneForm()]),
      ContactTollNo: this.fb.array([this.ContactTollNoForm()]),
      ContactMail: new FormControl(null),
      ContactWebsite: new FormControl(null),
      OtherLinksSite: this.fb.array([this.OtherLinksSiteForm()]),
      OtherLinksWEB: this.fb.array([this.OtherLinksWEBForm()]),
      GalleryPhotos: this.fb.array([this.GalleryPhotosForm()]),
      qrImage1: new FormControl(null),
      service_name1: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      business_name1: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      qrImage2: new FormControl(null),
      service_name2: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      business_name2: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      qrImage3: new FormControl(null),
      service_name3: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      business_name3: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      qrImage4: new FormControl(null),
      service_name4: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      business_name4: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      upiId1: new FormControl(null),
      upiBusinessName1: new FormControl(null, Validators.pattern('[a-zA-Z0-9]*')),
      upiId2: new FormControl(null),
      upiBusinessName2: new FormControl(null, Validators.pattern('[a-zA-Z0-9]*')),
      upiId3: new FormControl(null),
      upiBusinessName3: new FormControl(null, Validators.pattern('[a-zA-Z0-9]*')),
      upiId4: new FormControl(null),
      upiBusinessName4: new FormControl(null, Validators.pattern('[a-zA-Z0-9]*')),
      statisticsViews: new FormControl(null),
      statisticsBookmarks: new FormControl(null),
      statisticsSubscribers: new FormControl(null),
      statisticsMessages: new FormControl(null),
      statisticsReviews: new FormControl(null),
      statisticsProductBooking: new FormControl(null),
      statisticsAppointmentBooking: new FormControl(null),
      statisticsGalleryItems: new FormControl(null),
      relatedMainCategories: new FormControl(null),
      relatedPrimaryCategory: new FormControl(null),
      relatedSecondaryCategories: new FormControl(null),
      relatedTertiaryCategories: new FormControl(null),
      yearEstablished: new FormControl(null),
      gstIn: new FormControl(null),
      messageContent: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      timelineContent: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      funFactsContent: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      qrCodeImageOverview: new FormControl(null),
      aboutContent: new FormControl(null, Validators.pattern("[a-zA-Z0-9,' ]*")),
      created_almanac: new FormControl(null),
      verified_almanac: new FormControl(null),
      founded_almanac: new FormControl(null),
      yearUpdated_almanac: new FormControl(null),
      yearIncorporated_almanac: new FormControl(null),
      employees_almanac: new FormControl(null),
      branches_almanac: new FormControl(null),
      annualRevenue_almanac: new FormControl(null),
      loctionType_almanac: new FormControl(null),
      aka_almanac: new FormControl(null),
      qrCodeForProducts: new FormControl(null),
      facebookLink: new FormControl(null),
      instagramLink: new FormControl(null),
      pinterestLink: new FormControl(null),
      twitterLink: new FormControl(null),
      linkedInLink: new FormControl(null),
      youtubeLink: new FormControl(null),
      faqAdditionalInfo: new FormControl(null, Validators.pattern("[a-zA-Z0-9.' ]*")),
      tcAdditionalInfo: new FormControl(null),
      disclaimerAdditionalInfo: new FormControl(null),
      mondayShift1_from: new FormControl(null),
      mondayShift1_to: new FormControl(null),
      tuesdayShift1_from: new FormControl(null),
      tuesdayShift1_to: new FormControl(null),
      wednesdayShift1_from: new FormControl(null),
      wednesdayShift1_to: new FormControl(null),
      thursdayShift1_from: new FormControl(null),
      thursdayShift1_to: new FormControl(null),
      fridayShift1_from: new FormControl(null),
      fridayShift1_to: new FormControl(null),
      saturdayShift1_from: new FormControl(null),
      saturdayShift1_to: new FormControl(null),
      sundayShift1_from: new FormControl(null),
      sundayShift1_to: new FormControl(null),
      mondayShift2_from: new FormControl(null),
      mondayShift2_to: new FormControl(null),
      tuesdayShift2_from: new FormControl(null),
      tuesdayShift2_to: new FormControl(null),
      wednesdayShift2_from: new FormControl(null),
      wednesdayShift2_to: new FormControl(null),
      thursdayShift2_from: new FormControl(null),
      thursdayShift2_to: new FormControl(null),
      fridayShift2_from: new FormControl(null),
      fridayShift2_to: new FormControl(null),
      saturdayShift2_from: new FormControl(null),
      saturdayShift2_to: new FormControl(null),
      sundayShift2_from: new FormControl(null),
      sundayShift2_to: new FormControl(null),
      listingDataCountry: new FormControl(null),
      listingDataState: new FormControl(null),
      listingDataCity: new FormControl(null),
      listingDataPincode: new FormControl(null),
      averagePriceForListings: new FormControl(null),
      listing_address: new FormControl(null),
      Services: this.fb.array([this.ServicesForm()]),
      pricingCheap: new FormControl(null),
      pricingEconomical: new FormControl(null),
      pricingModerate: new FormControl(null),
      pricingExpensive: new FormControl(null),
      pricingLuxary: new FormControl(null),
      latitude: new FormControl(null),
      longitude: new FormControl(null),
      moreInfo_content: new FormControl(null),
      moreInfo_mission: new FormControl(null),
      moreInfo_vision: new FormControl(null),
      moreInfo_serve: new FormControl(null),
      moreInfo_approach: new FormControl(null),
      moreInfo_whatWeDo: new FormControl(null),
      keyFacts_projects: new FormControl(null),
      funFacts: this.fb.array([this.funFactForm()]),
      timeline: this.fb.array([this.timelineForm()]),
      price_type: new FormControl(null),
      price_range_min: new FormControl(null),
      price_range_max: new FormControl(null),
      discount: new FormControl(null),
    });
  }

  // Form builders and getters
  funFactForm() { return this.fb.group({ content: new FormControl(null) }); }
  get funFacts() { return this.detailForm.get('funFacts') as FormArray; }
  funFactAdd() { this.funFacts.push(this.funFactForm()); }

  timelineForm() { return this.fb.group({ content: new FormControl(null), date: new FormControl(null) }); }
  get timeline() { return this.detailForm.get('timeline') as FormArray; }
  timelineAdd() { this.timeline.push(this.timelineForm()); }

  ServicesForm() { return this.fb.group({ service: new FormControl(null) }); }
  get Services() { return this.detailForm.get('Services') as FormArray; }
  ServicesAdd() { this.Services.push(this.ServicesForm()); }

  teamForm() {
    return this.fb.group({
      image: new FormControl(null),
      memberName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      memberRole: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      memberEmail: new FormControl(null, [Validators.required, Validators.email]),
      memberContact: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      memberCategory: new FormControl(null)
    });
  }
  get team() { return this.detailForm.get('team') as FormArray; }
  teamadd() { this.team.push(this.teamForm()); }

  sliderForm() { return this.fb.group({ image: new FormControl(null) }); }
  get slider() { return this.detailForm.get('slider') as FormArray; }
  slideradd() { this.slider.push(this.sliderForm()); }

  announcementForm() { return this.fb.group({ name: new FormControl(null) }); }
  get announcement() { return this.detailForm.get('announcement') as FormArray; }
  announcementAdd() { this.announcement.push(this.announcementForm()); }

  allHighlightedProductsForm() {
    return this.fb.group({ image: new FormControl(null), title: new FormControl(null), description: new FormControl(null), Price: new FormControl(null), product_category: new FormControl(null) });
  }
  get allHighlightedProducts() { return this.detailForm.get('allHighlightedProducts') as FormArray; }
  allHighlightedProductsadd() { this.allHighlightedProducts.push(this.allHighlightedProductsForm()); }

  LicensesForm() { return this.fb.group({ file: new FormControl(null), file_name: new FormControl(null) }); }
  get Licenses() { return this.detailForm.get('Licenses') as FormArray; }
  Licensesadd() { this.Licenses.push(this.LicensesForm()); }
  Licenses_remove(i: number) { this.Licenses.removeAt(i); }

  specialityForm() { return this.fb.group({ name: new FormControl(null) }); }
  get selectedSpecialitiesName() { return this.detailForm.get('selectedSpecialitiesName') as FormArray; }
  speciality_add() { this.selectedSpecialitiesName.push(this.specialityForm()); }
  speciality__remove(i: number) { this.selectedSpecialitiesName.removeAt(i); }

  AwardsForm() { return this.fb.group({ file: new FormControl(null), file_name: new FormControl(null) }); }
  get Awards() { return this.detailForm.get('Awards') as FormArray; }
  Awardsadd() { this.Awards.push(this.AwardsForm()); }
  Awards_remove(i: number) { this.Awards.removeAt(i); }

  CertificationsForm() { return this.fb.group({ file: new FormControl(null), file_name: new FormControl(null) }); }
  get Certifications() { return this.detailForm.get('Certifications') as FormArray; }
  Certificationsadd() { this.Certifications.push(this.CertificationsForm()); }
  Certifications_remove(i: number) { this.Certifications.removeAt(i); }

  ContactAddressForm() { return this.fb.group({ address: new FormControl(null) }); }
  get ContactAddress() { return this.detailForm.get('ContactAddress') as FormArray; }
  ContactAddressadd() { this.ContactAddress.push(this.ContactAddressForm()); }

  ContactPhoneForm() { return this.fb.group({ phone: new FormControl(null) }); }
  get ContactPhone() { return this.detailForm.get('ContactPhone') as FormArray; }
  ContactPhoneadd() { this.ContactPhone.push(this.ContactPhoneForm()); }

  ContactTollNoForm() { return this.fb.group({ tollNo: new FormControl(null) }); }
  get ContactTollNo() { return this.detailForm.get('ContactTollNo') as FormArray; }
  ContactTollNoadd() { this.ContactTollNo.push(this.ContactTollNoForm()); }

  OtherLinksSiteForm() { return this.fb.group({ link: new FormControl(null) }); }
  get OtherLinksSite() { return this.detailForm.get('OtherLinksSite') as FormArray; }
  OtherLinksSiteadd() { this.OtherLinksSite.push(this.OtherLinksSiteForm()); }

  OtherLinksWEBForm() { return this.fb.group({ link: new FormControl(null) }); }
  get OtherLinksWEB() { return this.detailForm.get('OtherLinksWEB') as FormArray; }
  OtherLinksWEBadd() { this.OtherLinksWEB.push(this.OtherLinksWEBForm()); }

  GalleryPhotosForm() { return this.fb.group({ image: new FormControl(null) }); }
  get GalleryPhotos() { return this.detailForm.get('GalleryPhotos') as FormArray; }
  GalleryPhotosadd() { this.GalleryPhotos.push(this.GalleryPhotosForm()); }

  // UI handlers (no-op stubs for now)
  launchmedia(_: any) {}
  getSelectedImgs(_: any) {}
  audioUpload(_: any) {}
  doc_upload(_: any, __: any, ___: any) {}
  saveMainBanner() {}
  saveDetailsSection() {}
  saveCategoriesSection() {}
  saveTagsSection() {}
  saveServiceSection() {}
  saveAboutBusinessSection() {}
  saveTeamSection() {}
  saveSliderSection() {}
  saveHighlightedProductsSection() {}
  saveLicensesSection() {}
  saveAwardsSection() {}
  saveCertificationsSection() {}
  saveContactInfoSection() {}
  saveGallerySection() {}
  savePaymentSection() {}
  saveStatisticsSection() {}
  saveAdditionalInfoSection() {}
  saveMoreInfoSection() {}
  saveFunFactsSection() {}
  saveTimelineSection() {}
  saveAmenitiesSection() {}
  saveSpecialitiesSection() {}
  saveOurTeamSection() {}
  saveWorkingHoursSection() {}
  onsubmit() {}
  fetchState() {}
  fetchCity() {}
  fetchPincodes() {}
  fetchPrimaryCat() {}
  fetchSecondaryCat() {}
  fetchTertiaryCat() {}
  calculateAverageListingPrice() {}

  // Missing handlers referenced in template
  saveSocialLinksSection() {}
  saveAdvertisementSection() {}
  savePriceRangeSection() {}
  saveRepresentativeSection() {}
}
