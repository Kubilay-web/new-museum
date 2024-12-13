import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Visit from "./pages/Visit/Visit";
import FamilyVisit from "./pages/FamilyVisit/FamilyVisit";
import GroupVisit from "./pages/GroupVisit/GroupVisit";
import AudioApp from "./pages/Audioapp/AudioApp";
import OutTours from "./pages/OutTours/OutTours";
import TourAndTalk from "./pages/TourAndTalks/TourAndTalk";
import ObjectTrail from "./pages/ObjectTrail/ObjectTrail";
import Accessibility from "./pages/Accessibility/Accessibility";
import FoodDrink from "./pages/FoodDrink/FoodDrink";
import LateOpen from "./pages/LateOpen/LateOpen";
import MuseumMap from "./pages/MuseumMap/MuseumMap";
import Exhibition from "./pages/Exhibition/Exhibition";
import Collection from "./pages/Collection/Collection";
import CollectionGalery from "./pages/CollectionGalery/CollectionGalery";
import Blog from "./pages/Blog/Blog";
import Podcast from "./pages/Podcast/Podcast";
import Learn from "./pages/Learn/Learn";
import LearnSchool from "./pages/LearnSchool/LearnSchool";
import Communities from "./pages/Communities/Communities";
import AdultLearning from "./pages/AdultLearning/AdultLearning";
import YoungPeople from "./pages/YoungPeople/YoungPeople";
import Membership from "./pages/Membership/Membership";
import YoungFriend from "./pages/YoungFriend/YoungFriend";
import ExistingMember from "./pages/ExistingMember/ExistingMember";
import Donate from "./pages/Donate/Donate";
import Corporate from "./pages/Corporate/Corporate";
import Patrons from "./pages/Patrons/Patrons";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Volunteer from "./pages/Volunteer/Volunteer";
import ExistPatron from "./pages/ExistPatron/ExistPatron";
import LeaveLegacy from "./pages/LeaveLegacy/LeaveLegacy";
import BritishMuseum from "./pages/BritishMuseum/BritishMuseum";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/visit/family-visits" element={<FamilyVisit />} />
      <Route path="/visit/group-visits" element={<GroupVisit />} />
      <Route path="/visit/audio-app" element={<AudioApp />} />
      <Route path="/visit/out-hours-tours" element={<OutTours />} />
      <Route path="/visit/tours-and-talks" element={<TourAndTalk />} />
      <Route path="/visit/object-trails" element={<ObjectTrail />} />
      <Route path="/visit/accessibility-museum" element={<Accessibility />} />
      <Route path="/visit/food-and-drink" element={<FoodDrink />} />
      <Route path="/visit/late-opening-on-fridays" element={<LateOpen />} />
      <Route path="/visit/museum-map" element={<MuseumMap />} />
      <Route path="/exhibitions-events" element={<Exhibition />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/galleries" element={<CollectionGalery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/the-british-museum-podcast" element={<Podcast />} />
      <Route path="/learn/schools" element={<LearnSchool />} />
      <Route path="/learn/communities" element={<Communities />} />
      <Route path="/learn/adult-learning" element={<AdultLearning />} />
      <Route path="/learn/young-people" element={<YoungPeople />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/membership/young-friends" element={<YoungFriend />} />
      <Route path="/membership/existing-members" element={<ExistingMember />} />

      <Route path="/support-us/donate" element={<Donate />} />
      <Route path="/support-us/corporate-support" element={<Corporate />} />
      <Route path="/support-us/patrons" element={<Patrons />} />
      <Route
        path="/support-us/supporter-case-studies"
        element={<CaseStudies />}
      />
      <Route path="/support-us/volunteer" element={<Volunteer />} />
      <Route path="/support-us/existing-patrons" element={<ExistPatron />} />
      <Route path="/support-us/leave-legacy" element={<LeaveLegacy />} />
      <Route
        path="/support-us/american-friends-british-museum"
        element={<BritishMuseum />}
      />

      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
