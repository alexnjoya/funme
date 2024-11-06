import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

actor Funme {
    // type for the funme project with a required image field
    public type Project = {
        id: Text;
        name: Text;
        targetAmount: Float;
        currentAmount: Float;
        image: Blob;
    };

    // State variable to store projects
    private var projects: HashMap.HashMap<Text, Project> = HashMap.HashMap(1, Text.equal, Text.hash);

    // Creating a new project with a required image
    public func createProject(id: Text, name: Text, targetAmount: Float, image: Blob) : async Bool {
        let newProject: Project = {
            id = id;
            name = name;
            targetAmount = targetAmount;
            currentAmount = 0.0;
            image = image;
        };
        projects.put(id, newProject); 
        return true;
    };

    // Delete a project by id
    public func deleteProject(id: Text) : async Bool {
        switch(projects.remove(id)) {
            case null {
                return false; 
            };
            case (?_) {
                return true; // Project successfully deleted
            }
        }
    };

    // Donate to a project
    public func donate(projectId: Text, amount: Float) : async Bool {
        switch(projects.get(projectId)) {
            case null {
                return false; // Project not found
            };
            case (?project) {
                let updatedProject: Project = {
                    id = project.id;
                    name = project.name;
                    targetAmount = project.targetAmount;
                    currentAmount = project.currentAmount + amount;
                    image = project.image;
                };
                projects.put(projectId, updatedProject);
                return true;
            }
        }
    };

    // Update an existing project's image
    public func updateProjectImage(projectId: Text, newImage: Blob) : async Bool {
        switch(projects.get(projectId)) {
            case null {
                return false; 
            };
            case (?project) {
                let updatedProject: Project = {
                    id = project.id;
                    name = project.name;
                    targetAmount = project.targetAmount;
                    currentAmount = project.currentAmount;
                    image = newImage;
                };
                projects.put(projectId, updatedProject);
                return true;
            }
        }
    };

    // View all projects
    public query func viewAllProjects() : async [(Text, Project)] {
        return Iter.toArray(projects.entries());
    };

    // View a specific project
    public query func viewProject(id: Text) : async ?Project {
        return projects.get(id);
    };
};
