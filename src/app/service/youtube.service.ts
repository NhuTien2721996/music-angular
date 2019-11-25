import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'pWOlc63Kg9w', song: '1977 Vlog - SỐNG MÒN - GIÁO ÁN LỬA THIÊNG'},
    {id: 'tCzvYMW-jO8', song: '1977 Vlog - Chị Dậu Parody - Kỷ Nguyên Hắc Ám'},
    {id: '6Iji2oTZ5U0', song: '1977 Vlog - Vợ chồng A Phủ Parody - Vòng Xoáy Của Bạc'},
    {id: '028YiboiYj0', song: 'NHẠC TRẺ REMIX 2020 TUYỂN CHỌN'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];

  constructor() {
  }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
