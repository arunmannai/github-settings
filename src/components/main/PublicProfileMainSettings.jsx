function PublicProfileMainSettings() {
    return (
        <>
        <div className="container-fluid">
        Home
        <p>Name</p>
        <input type="text" placeholder="Peter Griffin" className="alert-secondary" /><br/>
        Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.
      </div>
      <div className="container-fluid">
        <p>Public email</p>
        <input type="number" placeholder="Select a verified email to display" className="alert-secondary" /><br/>
        You have set your email address to private. To toggle email privacy, go to email settings and uncheck "Keep my email address private."
      </div>
      <div className="container-fluid">
        <p>Bio</p>
        <input type="number" placeholder="Select a verified email to display" className="container p-5 border"/><br/>
        You can @mention other users and organizations to link to them.</div>
        <div className="container-fluid">
        <p>Pronouns</p>
        <input type="number" placeholder="Don't specify" className="alert-secondary" /><br/>
        </div>
        <div className="container-fluid">
        <p>URL</p>
        <input type="number" className="alert-secondary" />
        </div>
        <div className="container-fluid">
        <p>Social accounts</p>
        <input type="text" className="alert-secondary mb-2" placeholder="Link to social profile" /><br/>
        <input type="text" className="alert-secondary mb-2" placeholder="Link to social profile"/><br/>
        <input type="text" className="alert-secondary mb-2" placeholder="Link to social profile" /><br/>
        <input type="text" className="alert-secondary mb-2" placeholder="Link to social profile" />
        </div>
        <div className="container-fluid">
        <p>Company</p>
        <input type="number" className="alert-secondary" /><br/>
        You can @mention your company’s GitHub organization to link it.
        </div>
        <div className="container-fluid">
        <p>Location</p>
        <input type="number" className="alert-secondary" placeholder="Dubuque, Iowa" />
        </div>
        <div className="container-fluid">
        <p>Display current local time<br/>
        Other users will see the time difference from their local time.</p>
        <p>All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our privacy statement to learn more about how we use this information.</p>
         </div>
         <button type="button" className="btn btn-success">Update profile</button>
      </>
    );
}

export default PublicProfileMainSettings;