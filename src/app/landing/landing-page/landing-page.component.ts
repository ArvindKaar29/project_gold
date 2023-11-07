import { Component } from '@angular/core';
import { SlideContent } from 'src/app/Interface/slide_content.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  toggle_log : string = 'signin'
  onSignInClicked(): void {
    this.toggle_log = 'signin'
  }

  onSignUpClicked(): void {
    this.toggle_log = 'signup'
  }

   slides: SlideContent[] = [
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' },
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' },
    { content: 'Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.Other meta-focused wikis such as Wikimedia Outreach are specialized projects that have their roots in Meta-Wiki. Related discussions also take place on Wikimedia mailing lists (particularly wikimedia-l, with its low-traffic equivalent WikimediaAnnounce), IRC channels on Libera, individual wikis of Wikimedia affiliates, and other places.' }
  ];
}
