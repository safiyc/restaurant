import React from 'react';
import * as S from './testimonialsStyles';

export default function Testimonials() {
  return (
    <S.Wrapper>
      <S.TitleTestimonial>
        <h3>Happy Customers</h3>
        <S.Squiggly>
          <S.SquigglyLine className="line1 lineSize" />
          <S.SquigglyLine className="line2 lineSize" />
        </S.Squiggly>
      </S.TitleTestimonial>
      <S.Customer>
        <S.PersonInfo><S.Image src={S.testimony1} /><S.Name>John Smith</S.Name><S.SubmittedWhen>Last week</S.SubmittedWhen></S.PersonInfo>
        <S.Description>
          Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
        <S.Rating>rating</S.Rating>
      </S.Customer>
      <S.Customer>
        <S.PersonInfo><S.Image src={S.testimony2} /><S.Name>Pete Deyer</S.Name><S.SubmittedWhen>3 days ago</S.SubmittedWhen></S.PersonInfo>
        <S.Description>
          Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
        <S.Rating>rating</S.Rating>
      </S.Customer>
      <S.Customer>
        <S.PersonInfo><S.Image src={S.testimony3} /><S.Name>Adam K</S.Name><S.SubmittedWhen>Two months ago</S.SubmittedWhen></S.PersonInfo>
        <S.Description>
          Delicious food, prices adequate to quality, I honestly recommend and will definitely visit this place again.
        </S.Description>
        <S.Rating>rating</S.Rating>
      </S.Customer>
      <S.Summary>
        <div>Summary: </div>
        <span>4.0</span><S.Rating>rating</S.Rating> <span>(421 votes)</span>
      </S.Summary>
      <S.ReserveContainer>
        <div className="reserve_contact">Call us via: <span>+1(832)000-0000</span> or</div> <S.ButtonAbout>Reserve A Table</S.ButtonAbout>
      </S.ReserveContainer>
    </S.Wrapper>
  )
}