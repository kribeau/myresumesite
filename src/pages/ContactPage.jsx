import React from 'react'
import Table from 'react-bootstrap/Table'
import Hero from '../components/Hero'
import Content from '../components/Content'

const ContactPage = props => {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Chun mu</td>
              <td>Tiao</td>
              <td>Chengdu</td>
            </tr>
          </tbody>
        </Table>
        <Table className="mt-5" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Contact</th>
              <th>Phone Call</th>
              <th>Mail box</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>13281811736</td>
              <td>chunmu.d@outlook.com</td>
            </tr>
          </tbody>
        </Table>
        <Table className="mt-5" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>social</th>
              <th>github</th>
              <th>blog</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <a href="https://github.com/kribeau">github.com/kribeau</a>
              </td>
              <td>
                <a href="https://dev-chunmu.netlify.com">
                  dev-chunmu.netlify.com
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </div>
  )
}

export default ContactPage
