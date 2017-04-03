import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button, FormControl } from 'react-bootstrap';

const Donation = () => (
  <Grid>
    <Row>
      <Col md={8} mdOffset={2} className="donation">
        <h3><b>Share some love</b></h3>
        {/* eslint-disable */}
        <p>
          For anyone who wants to or can give a monthly donation, at the end of each month you will be able to. It takes many hours to coordinate, facilitate and make these cohorts what they are, as well as funds to sustain. So if you found your cohort experience valuable and want to support Chingu's existence, any amount is much appreciated.<br />
          If you have any feedback or something to share send us an email here <a href="mailto:chinguftw@gmail.com" target="_top">chinguftw@gmail.com</a>.
        </p>
        {/* eslint-enable */}
        <div>
          <ButtonToolbar>
            {/*
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <FormControl type="hidden" name="cmd" value="_s-xclick" />
              <FormControl type="hidden" name="hosted_button_id" value="KBJ9E8DUWJVL2" />
              <Button type="submit" >One time donation</Button>
            </form>
            */}
            <div className="donationLink">
              <Button href="https://www.paypal.me/ChinguCohorts" target="_blank" >One time donation</Button>
            </div>
            <form className="donationLink" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <FormControl type="hidden" name="cmd" value="_s-xclick" />
              <FormControl type="hidden" name="hosted_button_id" value="SQLVBZ8EF5V96" />
              <table>
                <tbody>
                  <tr>
                    <td><FormControl type="hidden" name="on0" value="Donation options" />Donation options</td>
                  </tr>
                  <tr>
                    <td>
                      <select name="os0">
                        <option value="Option 1">$3.00 USD - monthly</option>
                        <option value="Option 2">$5.00 USD - monthly</option>
                        <option value="Option 3">$10.00 USD - monthly</option>
                        <option value="Option 4">$20.00 USD - monthly</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <FormControl type="hidden" name="currency_code" value="USD" />
              <Button type="submit" >Monthly donation</Button>
            </form>
          </ButtonToolbar>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Donation;
