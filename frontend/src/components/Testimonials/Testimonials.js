import React from 'react';
import { ButtonReserve } from '../../elements/Button';
import * as S from './testimonialsStyles';

export default function Testimonials() {
  return (
    <S.Wrapper>
      <S.TitleTestimonial>
        <h2>Happy Customers</h2>
        <S.Squiggly>
          <S.SquigglyLine className="line1 lineSize" />
          <S.SquigglyLine className="line2 lineSize" />
        </S.Squiggly>
      </S.TitleTestimonial>
      <S.Customers>
        <S.Customer>
          <S.PersonInfo><S.Image src={S.testimony1} /><S.Name>John Smith</S.Name><S.SubmittedWhen>Last week</S.SubmittedWhen></S.PersonInfo>
          <S.Description>
            Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
          <S.Rating>
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
          </S.Rating>
        </S.Customer>
        <S.Customer>
          <S.PersonInfo><S.Image src={S.testimony2} /><S.Name>Pete Deyer</S.Name><S.SubmittedWhen>3 days ago</S.SubmittedWhen></S.PersonInfo>
          <S.Description>
            Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
          <S.Rating>
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
          </S.Rating>
        </S.Customer>
        <S.Customer>
          <S.PersonInfo><S.Image src={S.testimony3} /><S.Name>Adam K</S.Name><S.SubmittedWhen>Two months ago</S.SubmittedWhen></S.PersonInfo>
          <S.Description>
            Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
          <S.Rating>
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='checked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
            <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
          </S.Rating>
        </S.Customer>
      </S.Customers>
      <S.Summary>
        <div>Summary:</div>
        <S.AverageScore>4.0</S.AverageScore>
        <S.Rating>
          <S.FontAwesomeIcon icon={S.faStar} className='checked' />
          <S.FontAwesomeIcon icon={S.faStar} className='checked' />
          <S.FontAwesomeIcon icon={S.faStar} className='checked' />
          <S.FontAwesomeIcon icon={S.faStar} className='checked' />
          <S.FontAwesomeIcon icon={S.faStar} className='unchecked' />
        </S.Rating>
        <S.Votes>(421 votes)</S.Votes>
      </S.Summary>
      <S.ReserveContainer>
        <div className="reserve_contact">Call us: <span>+1(832)000-0000</span> or</div> <S.ButtonCustomers><ButtonReserve /></S.ButtonCustomers>
      </S.ReserveContainer>
    </S.Wrapper>
  )
}