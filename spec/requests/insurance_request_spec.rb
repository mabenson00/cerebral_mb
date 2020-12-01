require 'rails_helper'

RSpec.describe "Insurances", type: :request do

  describe "create" do

    # login user so we can perform actions
    let(:user) { User.create(email: "michael@test.com", password: "topsecret") }
    before do
      post("/users/sign_in", params: {user: { email: user.email, password: user.password, remember_me: 0 } })
    end

    let(:http_request){ post v1_insurances_path(link_params) }
    let(:link_params){
      { insurance:
        { name: name,
          group_name: group_name,
          group_id: group_id,
          policy_id: policy_id,
          state: state,
          relationship: relationship,
          user_id: user.id }
      }
    }
    let(:name) { "Michael Benson" }
    let(:group_name) { "Group Name" }
    let(:group_id) { "123455" }
    let(:policy_id) { "ABC123" }
    let(:state) { "NY" }
    let(:relationship) { "self" }



    shared_examples "bad request" do
      it "returns 400 response" do
        http_request
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "does not save insurance" do
        expect{ http_request }.to_not (change{ Insurance.count })
      end
    end

    context "with valid data" do
      it "returns 201 response" do
        http_request
        expect(response).to have_http_status(:created)
      end

      it "saves insurance" do
        expect{ http_request }.to (change{ Insurance.count })
      end
    end

    context "with invalid name" do
      let(:name) { "ab"}

      it_behaves_like "bad request"
    end
  end
end
