import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SlideContent } from 'src/app/Interface/slide_content.interface';
import { getToggleValue } from '../Store/Action/landing.action';
import { Observable } from 'rxjs';
import { select_toggle_val } from '../Store/selector/user.selectors';
import { UserState, landingpageValues } from '../Store/Reducer/landing.reducer';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  constructor(public store: Store) { }

  toggle_log$: Observable<string> = new Observable<string>();
  
  ngOnInit(){
    this.toggle_log$ = this.store.pipe(select(select_toggle_val));
    this.toggle_log$.subscribe(val=>{
      console.log(val)
    })
  }

  // toggle_log : string = 'signin'

  

  onSignInClicked(): void {
    const toggle:landingpageValues={
      toggle_log:'signin',
      buttonType_signin:'primary',
      buttonType_signup:'default'
    }
    this.store.dispatch(getToggleValue({toggle}))
    
    // this.toggle_log = 'signin'
  }

  onSignUpClicked(): void {
    const toggle:landingpageValues={
      toggle_log:'signup',
      buttonType_signin:'default',
      buttonType_signup:'primary'
    }
    this.store.dispatch(getToggleValue({toggle}))

    // this.toggle_log = 'signup'
  }

   slides: SlideContent[] = [
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' },
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' },
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' }
  ];
}
