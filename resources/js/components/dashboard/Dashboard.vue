<template>
    <form id="contact-form" method="post" action="contact.php" role="form">
        <div class="messages"></div>

        <div class="controls">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_name">Nom *</label>
                        <input
                            id="form_name"
                            type="text"
                            v-model="employe.nom"
                            name="name"
                            class="form-control"
                            placeholder="Merci d'entrer le nom de l'employé *"
                            required="required"
                            data-error="Nom est obligatoire."
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_lastname">Prenom *</label>
                        <input
                            id="form_lastname"
                            type="text"
                            v-model="employe.prenom"
                            name="surname"
                            class="form-control"
                            placeholder="Merci d'entrer le prenom de l'employé *"
                            required="required"
                            data-error="Prenom est obligatoire."
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_name">CIN *</label>
                        <input
                            id="form_name"
                            type="text"
                            v-model="employe.cin"
                            name="name"
                            class="form-control"
                            placeholder="Merci d'entrer cin de l'employé *"
                            required="required"
                            data-error="CIN est obligatoire."
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_lastname">Matricule cnss *</label>
                        <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            v-model="employe.mat_cnss"
                            class="form-control"
                            placeholder="Merci d'entrer le Matricule cnss de l'employé *"
                            required="required"
                            data-error="Matricule cnss est obligatoire."
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_name">Fonction *</label>
                        <input
                            id="form_name"
                            type="text"
                            v-model="employe.cin"
                            name="name"
                            class="form-control"
                            placeholder="Merci d'entrer la Fonction de l'employé *"
                            required="required"
                            data-error="Fonction est obligatoire."
                        />
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="form_lastname">Entreprise *</label>
                            <select
                                required="required"
                                class="form-select"
                                v-model="employe.entreprise_id"
                                aria-label="Default select example"
                            >
                                <option
                                    v-for="entreprise in entreprises"
                                    :selected="entreprise.entreprise_id == entreprise.id"
                                    :key="entreprise.id"
                                    :value="entreprise.id"
                                >{{ entreprise.titre }}</option>
                            </select>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="form_message">Message *</label>
                        <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Message for me *"
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                        ></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-12">
                    <input type="submit" class="btn btn-success btn-send" value="Send message" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="text-muted">
                        <strong>*</strong> These fields are required. Contact form template by
                        <a
                            href="https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form"
                            target="_blank"
                        >Bootstrapious</a>.
                    </p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>
</style>
