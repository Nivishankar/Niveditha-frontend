import React from 'react'
import NavBars from '../components/NavBars'
import Footers from '../components/Footers'
import {Container,Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const BlogPage = () => {
  return (
    <div>
        <NavBars/>
        <div className='pt-3 pb-3 fs-1' style={{textAlign:"center"}}>BLOG</div>
        <Container> 
            <div className='ms-5 pb-4 fs-5'>All Post</div>
            <Row className='pt-3 ms-3 me-3 pb-3'>
                <Col><Image src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/495dbf5ead054840a9b405f5b8e55af3.jpg"></Image></Col>
                <Col><div className='pt-4 pb-2 fs-3'>THE HOLIDAY SPECIAL</div>
                <div>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</div></Col>

            </Row>

            <Row className='pt-3 ms-3 me-3 pb-3'>
                <Col>
                <Image src="https://static.wixstatic.com/media/cd1da2d221ec4d71af4e3ed305010c7c.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/cd1da2d221ec4d71af4e3ed305010c7c.jpg"></Image></Col>
                <Col><div className='pt-4 pb-2 fs-3'>SIMLE BACKDROPS FOR FOOD SHOTS</div>
                <div>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</div></Col>

            </Row>

            <Row className='pt-3 ms-3 me-3 pb-3'>
                <Col><Image src="https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/ce9814ce9f304fd6a9ae1bb862863c81.jpg"></Image></Col>
                <Col><div className='pt-4 pb-2 fs-3'>BEFORE THE DRIP</div>
                <div>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</div></Col>

            </Row>
        </Container>
        <Footers/>
    </div>
  )
}

export default BlogPage