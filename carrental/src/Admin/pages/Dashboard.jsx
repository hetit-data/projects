import React from 'react'
import AHeader from '../common/AHeader'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import AFooter from '../common/AFooter';


function Dashboard() {
  return (
    <div>
        <AHeader/>
        <MDBContainer className="py-5">
      {/* Page Header */}
      <MDBCard className="mb-4">
        <MDBCardHeader className="text-center bg-primary text-white">
          <h2>Admin Dashboard</h2>
        </MDBCardHeader>
        <MDBCardBody>
          <p className="text-center">
            Welcome to the Admin Dashboard. Here you can manage users, view analytics, and oversee application settings.
          </p>
        </MDBCardBody>
      </MDBCard>

      {/* Main Content */}
      <MDBRow>
        {/* User Management Section */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardHeader className="bg-info text-white text-center">
              <h5>User Management</h5>
            </MDBCardHeader>
            <MDBCardBody className="text-center">
              <MDBIcon fas icon="users" size="3x" className="mb-3 text-primary" />
              <p>Manage user accounts, roles, and permissions.</p>
              <MDBBtn color="info">Manage Users</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Analytics Section */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardHeader className="bg-success text-white text-center">
              <h5>Analytics</h5>
            </MDBCardHeader>
            <MDBCardBody className="text-center">
              <MDBIcon fas icon="chart-line" size="3x" className="mb-3 text-success" />
              <p>View key metrics and analytics for your application.</p>
              <MDBBtn color="success">View Analytics</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* Settings Section */}
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardHeader className="bg-warning text-white text-center">
              <h5>Application Settings</h5>
            </MDBCardHeader>
            <MDBCardBody className="text-center">
              <MDBIcon fas icon="cogs" size="3x" className="mb-3 text-warning" />
              <p>Update application configurations and settings.</p>
              <MDBBtn color="warning">Manage Settings</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Footer Section */}
      <MDBCard className="mt-4">
        <MDBCardBody className="text-center">
          <p className="mb-0">&copy; 2025 Your Company Name. All rights reserved.</p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <AFooter/>
    </div>
  )
}

export default Dashboard
